import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExplorer } from './project-explorer';

describe('ProjectExplorer', () => {
  let component: ProjectExplorer;
  let fixture: ComponentFixture<ProjectExplorer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectExplorer],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectExplorer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
