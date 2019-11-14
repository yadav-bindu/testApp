import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosPage } from './motos.page';

describe('MotosPage', () => {
  let component: MotosPage;
  let fixture: ComponentFixture<MotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
