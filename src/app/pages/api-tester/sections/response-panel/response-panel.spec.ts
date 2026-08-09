import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsePanel } from './response-panel';

describe('ResponsePanel', () => {
  let component: ResponsePanel;
  let fixture: ComponentFixture<ResponsePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(ResponsePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
