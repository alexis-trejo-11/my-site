import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerTree } from './explorer-tree';
import { ExplorerTreeNode } from './explorer-tree.model';

describe('ExplorerTree', () => {
  let component: ExplorerTree;
  let fixture: ComponentFixture<ExplorerTree>;

  const nodes: ExplorerTreeNode[] = [
    {
      type: 'folder',
      id: 'folder-1',
      name: 'Sandbox',
      children: [
        {
          type: 'leaf',
          id: 'leaf-1',
          name: 'Ping',
          data: null,
        },
      ],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorerTree],
    }).compileComponents();

    fixture = TestBed.createComponent(ExplorerTree);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('nodes', nodes);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
