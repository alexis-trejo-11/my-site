import { Component, TemplateRef, input, output } from '@angular/core';
import { ExplorerTreeNodeComponent } from './explorer-tree-node';
import {
  ExplorerFolderTemplateContext,
  ExplorerLeafTemplateContext,
  ExplorerTreeNode,
} from './explorer-tree.model';

@Component({
  selector: 'app-explorer-tree',
  imports: [ExplorerTreeNodeComponent],
  templateUrl: './explorer-tree.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ExplorerTree {
  nodes = input.required<ExplorerTreeNode[]>();
  expandedIds = input<ReadonlySet<string>>(new Set());
  selectedId = input<string | null>(null);
  forceExpand = input(false);
  leafTemplate = input<TemplateRef<ExplorerLeafTemplateContext> | null>(null);
  folderTemplate = input<TemplateRef<ExplorerFolderTemplateContext> | null>(null);

  toggleId = output<string>();
  selectLeaf = output<string>();
}
