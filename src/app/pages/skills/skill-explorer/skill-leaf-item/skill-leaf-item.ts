import { Component, input, output } from '@angular/core';
import { SkillModel } from '../../skills.model';

@Component({
  selector: 'app-skill-leaf-item',
  imports: [],
  templateUrl: './skill-leaf-item.html',
})
export class SkillLeafItem {
  skill = input.required<SkillModel>();
  depth = input(0);
  selected = input(false);

  select = output<void>();

  paddingLeft(): string {
    return `${8 + this.depth() * 12}px`;
  }

  onSelect(): void {
    this.select.emit();
  }
}
