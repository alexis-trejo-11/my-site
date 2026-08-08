import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMetadata } from './project-metadata';

describe('ProjectMetadata', () => {
  let component: ProjectMetadata;
  let fixture: ComponentFixture<ProjectMetadata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMetadata],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectMetadata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
