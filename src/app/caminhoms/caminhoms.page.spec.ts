import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhomsPage } from './caminhoms.page';

describe('CaminhomsPage', () => {
  let component: CaminhomsPage;
  let fixture: ComponentFixture<CaminhomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhomsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminhomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
