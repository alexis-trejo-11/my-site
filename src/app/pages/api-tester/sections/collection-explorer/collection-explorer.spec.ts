import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionExplorer } from './collection-explorer';
import { ApiTesterStore } from '../../api-tester.store';
import { Sandbox } from '../../data/sandbox';
import { cloneCollection } from '../../data/collection-schema';
import { vi } from 'vitest';

describe('CollectionExplorer', () => {
  let component: CollectionExplorer;
  let fixture: ComponentFixture<CollectionExplorer>;
  let store: ApiTesterStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionExplorer],
      providers: [ApiTesterStore],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionExplorer);
    component = fixture.componentInstance;
    store = TestBed.inject(ApiTesterStore);
    store.setCollections([cloneCollection(Sandbox)]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('creates a request from the embedded editor', () => {
    store.openEditor('REQUEST', 'sandbox');
    fixture.detectChanges();
    component.editorName.set('Local health check');
    component.editorProtocol.set('HTTP');

    component.submitEditor();

    expect(store.activeRequest()?.name).toBe('Local health check');
    expect(store.activeRequest()?.request.type).toBe('HTTP');
    expect(store.editorAction()).toBeNull();
  });

  it('resets Sandbox after confirmation', () => {
    const confirm = vi.spyOn(globalThis, 'confirm').mockReturnValue(true);
    store.createRequest({ parentId: 'sandbox', name: 'Disposable', protocol: 'HTTP' });

    component.resetSandbox();

    expect(confirm).toHaveBeenCalledOnce();
    expect(store.collections()[0]).toEqual(Sandbox);
  });
});
