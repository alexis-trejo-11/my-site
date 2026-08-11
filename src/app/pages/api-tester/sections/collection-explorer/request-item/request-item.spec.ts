import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestItem } from './request-item';
import { CollectionRequestItem } from '../../../api-tester.model';

describe('RequestItem', () => {
  let component: RequestItem;
  let fixture: ComponentFixture<RequestItem>;

  const request: CollectionRequestItem = {
    type: 'REQUEST',
    id: 'req-1',
    name: 'Health',
    request: {
      type: 'HTTP',
      method: 'GET',
      url: '/health',
      queryParams: [],
      headers: [],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestItem],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('request', request);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
