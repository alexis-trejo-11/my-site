import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDocumentation } from './project-documentation';

describe('ProjectDocumentation', () => {
  let component: ProjectDocumentation;
  let fixture: ComponentFixture<ProjectDocumentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDocumentation],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDocumentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
