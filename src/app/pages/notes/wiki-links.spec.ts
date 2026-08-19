import { Marked } from 'marked';
import { describe, expect, it } from 'vitest';
import { NoteNode } from './notes.model';
import {
  createWikiLinkExtension,
  normalizeWikiKey,
  WikiLookup,
  WIKI_NOTE_ID_ATTR,
} from './wiki-links';

const fixture: NoteNode[] = [
  {
    type: 'folder',
    id: '01-fundamentals',
    name: 'Fundamentals',
    order: 1,
    children: [
      {
        type: 'note',
        id: '01-fundamentals/computer-architecture/part-01-data-representation/bit',
        name: 'Bit',
        title: 'Bit',
        order: 1,
        contentSrc: '/notes/bit.md',
      },
      {
        type: 'note',
        id: '01-fundamentals/computer-architecture/part-01-data-representation/byte',
        name: 'Byte',
        title: 'Byte',
        order: 2,
        contentSrc: '/notes/byte.md',
      },
      {
        type: 'note',
        id: '01-fundamentals/networking/00-how-the-internet-works',
        name: 'How the Internet Works',
        title: 'How the Internet Works',
        order: 0,
        contentSrc: '/notes/how.md',
      },
      {
        type: 'note',
        id: '01-fundamentals/computer-architecture/part-02-hardware/cpu',
        name: 'CPU',
        title: 'CPU',
        order: 1,
        contentSrc: '/notes/cpu.md',
      },
      {
        type: 'note',
        id: '02-languages/java/cpu',
        name: 'CPU',
        title: 'CPU (Java)',
        order: 1,
        contentSrc: '/notes/java-cpu.md',
      },
    ],
  },
];

function parse(markdown: string): string {
  const marked = new Marked();
  marked.use(createWikiLinkExtension(new WikiLookup(fixture)));
  return marked.parse(markdown, { async: false }) as string;
}

describe('normalizeWikiKey', () => {
  it('kebab-cases Obsidian note names', () => {
    expect(normalizeWikiKey('IP_Addresses_and_Protocols')).toBe(
      'ip-addresses-and-protocols',
    );
    expect(normalizeWikiKey('00_How_the_Internet_Works.md')).toBe(
      '00-how-the-internet-works',
    );
    expect(normalizeWikiKey('Bit')).toBe('bit');
  });
});

describe('WikiLookup', () => {
  const lookup = new WikiLookup(fixture);

  it('resolves a note by filename stem', () => {
    expect(lookup.resolve('Byte')?.id).toBe(
      '01-fundamentals/computer-architecture/part-01-data-representation/byte',
    );
  });

  it('resolves underscore names and numeric prefixes', () => {
    expect(lookup.resolve('00_How_the_Internet_Works')?.id).toBe(
      '01-fundamentals/networking/00-how-the-internet-works',
    );
  });

  it('resolves a path-style wiki target as a suffix', () => {
    expect(lookup.resolve('Networking/00_How_the_Internet_Works')?.id).toBe(
      '01-fundamentals/networking/00-how-the-internet-works',
    );
  });

  it('returns null for unpublished targets', () => {
    expect(lookup.resolve('Missing_Note')).toBeNull();
  });

  it('picks the first stem match when names collide', () => {
    expect(lookup.resolve('CPU')?.id).toBe(
      '01-fundamentals/computer-architecture/part-02-hardware/cpu',
    );
  });
});

describe('wiki-link marked extension', () => {
  it('turns a resolved wiki link into an in-app anchor', () => {
    const html = parse('See [[Byte]].');
    expect(html).toContain('class="wiki-link"');
    expect(html).toContain(`${WIKI_NOTE_ID_ATTR}="01-fundamentals/computer-architecture/part-01-data-representation/byte"`);
    expect(html).toContain('>Byte</a>');
  });

  it('uses the alias as link text', () => {
    const html = parse('Eight [[Bit|bits]].');
    expect(html).toContain('>bits</a>');
    expect(html).toContain(
      `${WIKI_NOTE_ID_ATTR}="01-fundamentals/computer-architecture/part-01-data-representation/bit"`,
    );
  });

  it('renders unpublished targets as plain text without brackets', () => {
    const html = parse('See [[Electronic_Circuits]].');
    expect(html).not.toContain('[[');
    expect(html).toContain('class="wiki-link-unresolved"');
    expect(html).toContain('Electronic Circuits');
  });

  it('leaves wiki syntax inside code spans alone', () => {
    const html = parse('Use `[[Byte]]` in Obsidian.');
    expect(html).toContain('[[Byte]]');
    expect(html).not.toContain('class="wiki-link"');
  });
});
