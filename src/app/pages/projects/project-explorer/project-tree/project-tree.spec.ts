import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTree } from './project-tree';

describe('ProjectTree', () => {
  let component: ProjectTree;
  let fixture: ComponentFixture<ProjectTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTree],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
