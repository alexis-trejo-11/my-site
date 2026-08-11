import { computed, Injectable, signal } from '@angular/core';
import {
  ExplorerTreeNode,
} from '../../shared/explorer-tree';
import { SkillCategory, SkillModel } from './skills.model';

@Injectable()
export class SkillsStore {
  readonly categories = signal<SkillCategory[]>([]);
  readonly filterQuery = signal('');
  readonly expandedIds = signal<ReadonlySet<string>>(new Set());
  readonly activeSkillId = signal<string | null>(null);

  readonly filteredCategories = computed(() => {
    const query = this.filterQuery().trim().toLowerCase();
    const categories = this.categories();
    if (!query) {
      return categories;
    }
    return categories
      .map((category) => filterCategory(category, query))
      .filter((category): category is SkillCategory => category !== null);
  });

  readonly treeNodes = computed((): ExplorerTreeNode<SkillModel>[] =>
    this.filteredCategories().map((category) => ({
      type: 'folder',
      id: category.id,
      name: category.name,
      children: category.skills.map((skill) => ({
        type: 'leaf' as const,
        id: skill.id,
        name: skill.name,
        data: skill,
      })),
    })),
  );

  readonly forceExpand = computed(() => this.filterQuery().trim().length > 0);

  readonly activeSkill = computed(() => {
    const id = this.activeSkillId();
    if (!id) {
      return null;
    }
    return findSkill(this.categories(), id);
  });

  readonly activeCategory = computed(() => {
    const id = this.activeSkillId();
    if (!id) {
      return null;
    }
    return findCategoryForSkill(this.categories(), id);
  });

  readonly relatedSkills = computed(() => {
    const skill = this.activeSkill();
    if (!skill?.relatedSkillIds?.length) {
      return [];
    }
    return skill.relatedSkillIds
      .map((id) => findSkill(this.categories(), id))
      .filter((s): s is SkillModel => s !== null);
  });

  setCategories(categories: SkillCategory[]): void {
    this.categories.set(categories);
    this.expandedIds.set(new Set(categories.map((c) => c.id)));
    if (!this.activeSkillId()) {
      const first = categories[0]?.skills[0];
      if (first) {
        this.activeSkillId.set(first.id);
      }
    }
  }

  setFilter(query: string): void {
    this.filterQuery.set(query);
  }

  isExpanded(id: string): boolean {
    return this.expandedIds().has(id);
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

  selectSkill(id: string): void {
    if (findSkill(this.categories(), id)) {
      this.activeSkillId.set(id);
    }
  }
}

function filterCategory(
  category: SkillCategory,
  query: string,
): SkillCategory | null {
  if (category.name.toLowerCase().includes(query)) {
    return category;
  }
  const skills = category.skills.filter((skill) => {
    const haystack = `${skill.name} ${skill.title}`.toLowerCase();
    return haystack.includes(query);
  });
  if (skills.length === 0) {
    return null;
  }
  return { ...category, skills };
}

function findSkill(
  categories: SkillCategory[],
  id: string,
): SkillModel | null {
  for (const category of categories) {
    const found = category.skills.find((skill) => skill.id === id);
    if (found) {
      return found;
    }
  }
  return null;
}

function findCategoryForSkill(
  categories: SkillCategory[],
  skillId: string,
): SkillCategory | null {
  for (const category of categories) {
    if (category.skills.some((skill) => skill.id === skillId)) {
      return category;
    }
  }
  return null;
}
