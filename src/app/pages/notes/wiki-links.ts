import type { MarkedExtension, Tokens } from 'marked';
import { NOTE_VAULT } from './notes.data';
import { NoteDoc, NoteNode } from './notes.model';

/** HTML attribute used by the note pane click handler. */
export const WIKI_NOTE_ID_ATTR = 'data-note-id';

const WIKI_LINK_RE =
  /^\[\[([^\]|#\n]+?)(?:#([^\]|\n]+?))?(?:\|([^\]\n]+?))?\]\]/;

interface WikiLinkToken extends Tokens.Generic {
  type: 'wikiLink';
  target: string;
  heading?: string;
  alias?: string;
}

/** Maps Obsidian wiki targets (`[[Byte]]`) onto published note ids. */
export class WikiLookup {
  private readonly byId = new Map<string, NoteDoc>();
  private readonly byStem = new Map<string, NoteDoc[]>();

  constructor(nodes: NoteNode[]) {
    this.index(nodes);
  }

  resolve(target: string): NoteDoc | null {
    const normalized = normalizeWikiKey(target);
    if (!normalized) {
      return null;
    }

    const exact = this.byId.get(normalized);
    if (exact) {
      return exact;
    }

    for (const [id, note] of this.byId) {
      if (id.endsWith(`/${normalized}`)) {
        return note;
      }
    }

    const stem = normalized.split('/').pop();
    if (!stem) {
      return null;
    }
    const matches = this.byStem.get(stem);
    if (!matches?.length) {
      return null;
    }
    return matches[0];
  }

  private index(nodes: NoteNode[]): void {
    for (const node of nodes) {
      if (node.type === 'folder') {
        this.index(node.children);
        continue;
      }

      const idKey = normalizeWikiKey(node.id);
      this.byId.set(idKey, node);

      this.addStem(idKey.split('/').pop() ?? idKey, node);
      const nameKey = normalizeWikiKey(node.name);
      if (nameKey && nameKey !== idKey) {
        this.addStem(nameKey, node);
      }
    }
  }

  private addStem(stem: string, note: NoteDoc): void {
    const list = this.byStem.get(stem) ?? [];
    if (!list.some((existing) => existing.id === note.id)) {
      list.push(note);
    }
    this.byStem.set(stem, list);
  }
}

export function normalizeWikiKey(value: string): string {
  return value
    .trim()
    .replace(/\.md$/i, '')
    .replaceAll('\\', '/')
    .replace(/[_\s]+/g, '-')
    .toLowerCase();
}

export function createWikiLinkExtension(lookup: WikiLookup): MarkedExtension {
  return {
    extensions: [
      {
        name: 'wikiLink',
        level: 'inline',
        start(src: string): number | undefined {
          const index = src.indexOf('[[');
          return index === -1 ? undefined : index;
        },
        tokenizer(src: string): WikiLinkToken | undefined {
          const match = WIKI_LINK_RE.exec(src);
          if (!match) {
            return undefined;
          }
          const heading = match[2]?.trim();
          const alias = match[3]?.trim();
          return {
            type: 'wikiLink',
            raw: match[0],
            target: match[1].trim(),
            heading: heading || undefined,
            alias: alias || undefined,
          };
        },
        renderer(token: Tokens.Generic): string {
          return renderWikiLink(token as WikiLinkToken, lookup);
        },
      },
    ],
  };
}

export const wikiLinkExtension = createWikiLinkExtension(
  new WikiLookup(NOTE_VAULT),
);

function renderWikiLink(token: WikiLinkToken, lookup: WikiLookup): string {
  const note = lookup.resolve(token.target);
  const label = escapeHtml(wikiLinkLabel(token, note));

  if (!note) {
    return `<span class="wiki-link-unresolved">${label}</span>`;
  }

  const href = `/notes/${encodeURIComponent(note.id)}`;
  return `<a class="wiki-link" href="${escapeHtml(href)}" ${WIKI_NOTE_ID_ATTR}="${escapeHtml(note.id)}">${label}</a>`;
}

function wikiLinkLabel(token: WikiLinkToken, note: NoteDoc | null): string {
  if (token.alias) {
    return token.alias;
  }
  if (note) {
    return note.name;
  }
  const leaf = token.target.split('/').pop() ?? token.target;
  return leaf.replaceAll('_', ' ');
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
