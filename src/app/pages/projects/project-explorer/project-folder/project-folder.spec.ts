import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFolder } from './project-folder';

describe('ProjectFolder', () => {
  let component: ProjectFolder;
  let fixture: ComponentFixture<ProjectFolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFolder],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectFolder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
