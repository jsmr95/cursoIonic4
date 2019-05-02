import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitslistPage } from './fruitslist.page';

describe('FruitslistPage', () => {
  let component: FruitslistPage;
  let fixture: ComponentFixture<FruitslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
