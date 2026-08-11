import { computed, Injectable, signal } from '@angular/core';
import { ExplorerTreeNode } from '../../shared/explorer-tree';
import {
  NoteBreadcrumb,
  NoteDoc,
  NoteFolder,
  NoteNode,
} from './notes.model';

@Injectable()
export class NotesStore {
  readonly vault = signal<NoteNode[]>([]);
  readonly filterQuery = signal('');
  readonly expandedIds = signal<ReadonlySet<string>>(new Set());
  readonly activeNoteId = signal<string | null>(null);

  readonly filteredVault = computed(() => {
    const query = this.filterQuery().trim().toLowerCase();
    const vault = this.vault();
    if (!query) {
      return vault;
    }
    return vault
      .map((node) => filterNode(node, query))
      .filter((node): node is NoteNode => node !== null);
  });

  readonly treeNodes = computed((): ExplorerTreeNode<NoteDoc>[] =>
    toTreeNodes(this.filteredVault()),
  );

  readonly forceExpand = computed(() => this.filterQuery().trim().length > 0);

  readonly activeNote = computed(() => {
    const id = this.activeNoteId();
    if (!id) {
      return null;
    }
    return findNote(this.vault(), id);
  });

  readonly breadcrumbs = computed((): NoteBreadcrumb[] => {
    const id = this.activeNoteId();
    if (!id) {
      return [];
    }
    return findBreadcrumbs(this.vault(), id) ?? [];
  });

  readonly siblingNotes = computed((): NoteDoc[] => {
    const id = this.activeNoteId();
    if (!id) {
      return [];
    }
    const parent = findParentFolder(this.vault(), id);
    if (!parent) {
      return [];
    }
    return parent.children.filter(
      (child): child is NoteDoc =>
        child.type === 'note' && child.id !== id,
    );
  });

  setVault(nodes: NoteNode[]): void {
    this.vault.set(nodes);
    const first = firstNote(nodes);
    if (first && !this.activeNoteId()) {
      this.activeNoteId.set(first.id);
      const ancestors = findBreadcrumbs(nodes, first.id) ?? [];
      this.expandedIds.set(
        new Set(
          ancestors.filter((crumb) => crumb.type === 'folder').map((c) => c.id),
        ),
      );
    }
  }

  setFilter(query: string): void {
    this.filterQuery.set(query);
  }

  toggleExpanded(id: string): void {
    const next = new Set(this.expandedIds());
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this.expandedIds.set(next);
  }

  selectNote(id: string): void {
    if (!findNote(this.vault(), id)) {
      return;
    }
    this.activeNoteId.set(id);
    const ancestors = findBreadcrumbs(this.vault(), id) ?? [];
    const next = new Set(this.expandedIds());
    for (const crumb of ancestors) {
      if (crumb.type === 'folder') {
        next.add(crumb.id);
      }
    }
    this.expandedIds.set(next);
  }
}

function toTreeNodes(nodes: NoteNode[]): ExplorerTreeNode<NoteDoc>[] {
  return nodes.map((node) => {
    if (node.type === 'folder') {
      return {
        type: 'folder' as const,
        id: node.id,
        name: node.name,
        children: toTreeNodes(node.children),
      };
    }
    return {
      type: 'leaf' as const,
      id: node.id,
      name: node.name,
      data: node,
    };
  });
}

function filterNode(node: NoteNode, query: string): NoteNode | null {
  if (node.type === 'note') {
    const haystack = `${node.name} ${node.title}`.toLowerCase();
    return haystack.includes(query) ? node : null;
  }
  if (node.name.toLowerCase().includes(query)) {
    return node;
  }
  const children = node.children
    .map((child) => filterNode(child, query))
    .filter((child): child is NoteNode => child !== null);
  if (children.length === 0) {
    return null;
  }
  return { ...node, children };
}

function findNote(nodes: NoteNode[], id: string): NoteDoc | null {
  for (const node of nodes) {
    if (node.type === 'note' && node.id === id) {
      return node;
    }
    if (node.type === 'folder') {
      const found = findNote(node.children, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

function firstNote(nodes: NoteNode[]): NoteDoc | null {
  for (const node of nodes) {
    if (node.type === 'note') {
      return node;
    }
    const nested = firstNote(node.children);
    if (nested) {
      return nested;
    }
  }
  return null;
}

function findBreadcrumbs(
  nodes: NoteNode[],
  id: string,
  trail: NoteBreadcrumb[] = [],
): NoteBreadcrumb[] | null {
  for (const node of nodes) {
    if (node.type === 'note' && node.id === id) {
      return [...trail, { id: node.id, name: node.name, type: 'note' }];
    }
    if (node.type === 'folder') {
      const next = [
        ...trail,
        { id: node.id, name: node.name, type: 'folder' as const },
      ];
      const found = findBreadcrumbs(node.children, id, next);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

function findParentFolder(
  nodes: NoteNode[],
  noteId: string,
): NoteFolder | null {
  for (const node of nodes) {
    if (node.type !== 'folder') {
      continue;
    }
    if (node.children.some((child) => child.type === 'note' && child.id === noteId)) {
      return node;
    }
    const found = findParentFolder(node.children, noteId);
    if (found) {
      return found;
    }
  }
  return null;
}
