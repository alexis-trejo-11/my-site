/** A markdown note leaf in the vault tree. */
export interface NoteDoc {
  type: 'note';
  id: string;
  /** Tree label (numeric prefixes stripped). */
  name: string;
  /** Document title shown in the center pane. */
  title: string;
  /** Sort key derived from vault numeric prefixes (`01_`, `Part_02_`, …). */
  order: number;
  /** Public asset path, e.g. `/notes/01-fundamentals/.../bit.md`. */
  contentSrc: string;
}

/** Recursive folder; children may be folders or notes. */
export interface NoteFolder {
  type: 'folder';
  id: string;
  name: string;
  order: number;
  children: NoteNode[];
}

export type NoteNode = NoteFolder | NoteDoc;

export interface NoteBreadcrumb {
  id: string;
  name: string;
  type: 'folder' | 'note';
}
