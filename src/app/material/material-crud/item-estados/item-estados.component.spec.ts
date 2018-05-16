import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEstadosComponent } from './item-estados.component';

describe('ItemEstadosComponent', () => {
  let component: ItemEstadosComponent;
  let fixture: ComponentFixture<ItemEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
