import { Component, inject } from '@angular/core';
import { ExplorerTree } from '../../../shared/explorer-tree';
import { SkillsStore } from '../skills.store';
import { SkillLeafItem } from './skill-leaf-item/skill-leaf-item';

@Component({
  selector: 'app-skill-explorer',
  imports: [ExplorerTree, SkillLeafItem],
  templateUrl: './skill-explorer.html',
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class SkillExplorer {
  readonly store = inject(SkillsStore);

  onFilterInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.store.setFilter(value);
  }

  onToggleId(id: string): void {
    this.store.toggleExpanded(id);
  }

  onSelectLeaf(id: string): void {
    this.store.selectSkill(id);
  }
}
