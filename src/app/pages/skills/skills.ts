import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from '../../shared/header/header';
import { SkillDocumentation } from './skill-documentation/skill-documentation';
import { SkillExplorer } from './skill-explorer/skill-explorer';
import { SkillMetadata } from './skill-metadata/skill-metadata';
import { SkillsService } from './skills.service';
import { SkillsStore } from './skills.store';

@Component({
  selector: 'app-skills',
  imports: [Header, SkillExplorer, SkillDocumentation, SkillMetadata],
  providers: [SkillsStore],
  templateUrl: './skills.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 100%;
      width: 100%;
      overflow: hidden;
    }
  `,
})
export class Skills implements OnInit {
  private readonly skillsService = inject(SkillsService);
  private readonly store = inject(SkillsStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    effect(() => {
      const id = this.store.activeSkillId();
      if (id) {
        this.router.navigate(['/skills', id], { replaceUrl: true });
      }
    });
  }

  explorerOpen = signal(true);
  metadataOpen = signal(true);

  gridClass = computed(() => {
    const explorer = this.explorerOpen();
    const metadata = this.metadataOpen();

    if (explorer && metadata) {
      return 'grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)_300px]';
    }
    if (explorer) {
      return 'grid-cols-[280px_minmax(0,1fr)]';
    }
    if (metadata) {
      return 'grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_300px]';
    }
    return 'grid-cols-[minmax(0,1fr)]';
  });

  toggleExplorer(): void {
    this.explorerOpen.update((open) => !open);
  }

  toggleMetadata(): void {
    this.metadataOpen.update((open) => !open);
  }

  ngOnInit(): void {
    this.skillsService.getCategories().subscribe((categories) => {
      this.store.setCategories(categories);
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.store.selectSkill(id);
      }
    });
  }
}
