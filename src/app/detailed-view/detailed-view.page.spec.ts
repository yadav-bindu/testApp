import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedViewPage } from './detailed-view.page';

describe('DetailedViewPage', () => {
  let component: DetailedViewPage;
  let fixture: ComponentFixture<DetailedViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
