import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTester } from './api-tester';
import { provideRouter } from '@angular/router';
import { ApiTesterStore } from './api-tester.store';
import { SandboxPersistenceService } from './sandbox-persistence.service';

describe('ApiTester', () => {
  let component: ApiTester;
  let fixture: ComponentFixture<ApiTester>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiTester],
      providers: [
        provideRouter([
          { path: 'api-tester', component: ApiTester },
          { path: 'api-tester/:id', component: ApiTester },
        ]),
      ],
    }).compileComponents();

    localStorage.clear();
    fixture = TestBed.createComponent(ApiTester);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('persists Sandbox mutations through the page coordinator', async () => {
    const store = fixture.debugElement.injector.get(ApiTesterStore);

    store.createRequest({ parentId: 'sandbox', name: 'Persist me', protocol: 'HTTP' });
    fixture.detectChanges();
    await fixture.whenStable();

    const persisted = localStorage.getItem(SandboxPersistenceService.storageKey);
    expect(persisted).toContain('Persist me');
  });
});
