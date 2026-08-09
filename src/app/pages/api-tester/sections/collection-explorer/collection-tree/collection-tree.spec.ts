import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionTree } from './collection-tree';

describe('CollectionTree', () => {
  let component: CollectionTree;
  let fixture: ComponentFixture<CollectionTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionTree],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionTree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
