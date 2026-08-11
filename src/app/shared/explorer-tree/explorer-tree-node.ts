import { NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, input, output } from '@angular/core';
import {
  ExplorerLeafTemplateContext,
  ExplorerTreeNode,
} from './explorer-tree.model';

@Component({
  selector: 'app-explorer-tree-node',
  imports: [NgTemplateOutlet, ExplorerTreeNodeComponent],
  templateUrl: './explorer-tree-node.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ExplorerTreeNodeComponent {
  node = input.required<ExplorerTreeNode>();
  depth = input(0);
  expandedIds = input<ReadonlySet<string>>(new Set());
  selectedId = input<string | null>(null);
  forceExpand = input(false);
  leafTemplate =
    input<TemplateRef<ExplorerLeafTemplateContext> | null>(null);

  toggleId = output<string>();
  selectLeaf = output<string>();

  isFolderOpen(): boolean {
    if (this.forceExpand()) {
      return true;
    }
    return this.expandedIds().has(this.node().id);
  }

  isSelected(): boolean {
    return this.selectedId() === this.node().id;
  }

  paddingLeft(): string {
    return `${8 + this.depth() * 12}px`;
  }

  onToggle(): void {
    this.toggleId.emit(this.node().id);
  }

  onSelectLeaf(): void {
    this.selectLeaf.emit(this.node().id);
  }

  onChildToggle(id: string): void {
    this.toggleId.emit(id);
  }

  onChildSelect(id: string): void {
    this.selectLeaf.emit(id);
  }

  leafContext(): ExplorerLeafTemplateContext {
    const node = this.node();
    if (node.type !== 'leaf') {
      throw new Error('leafContext requires a leaf node');
    }
    return {
      $implicit: node,
      depth: this.depth(),
      selected: this.isSelected(),
      select: () => this.onSelectLeaf(),
    };
  }
}
