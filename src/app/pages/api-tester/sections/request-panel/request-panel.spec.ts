import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPanel } from './request-panel';

describe('RequestPanel', () => {
  let component: RequestPanel;
  let fixture: ComponentFixture<RequestPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
