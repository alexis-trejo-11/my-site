import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionExplorer } from './collection-explorer';
import { ApiTesterStore } from '../../api-tester.store';

describe('CollectionExplorer', () => {
  let component: CollectionExplorer;
  let fixture: ComponentFixture<CollectionExplorer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionExplorer],
      providers: [ApiTesterStore],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionExplorer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
