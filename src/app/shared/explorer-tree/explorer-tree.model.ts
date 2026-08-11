export type ExplorerTreeNode<TLeaf = unknown> = ExplorerFolderNode<TLeaf> | ExplorerLeafNode<TLeaf>;

export interface ExplorerFolderNode<TLeaf = unknown> {
  type: 'folder';
  id: string;
  name: string;
  children: ExplorerTreeNode<TLeaf>[];
}

export interface ExplorerLeafNode<TLeaf = unknown> {
  type: 'leaf';
  id: string;
  name: string;
  data: TLeaf;
}

export interface ExplorerLeafTemplateContext<TLeaf = unknown> {
  $implicit: ExplorerLeafNode<TLeaf>;
  depth: number;
  selected: boolean;
  select: () => void;
}

export interface ExplorerFolderTemplateContext<TLeaf = unknown> {
  $implicit: ExplorerFolderNode<TLeaf>;
  depth: number;
  expanded: boolean;
  toggle: () => void;
}
