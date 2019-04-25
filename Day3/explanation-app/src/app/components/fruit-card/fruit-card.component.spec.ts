import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitCardComponent } from './fruit-card.component';

describe('FruitCardComponent', () => {
  let component: FruitCardComponent;
  let fixture: ComponentFixture<FruitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
