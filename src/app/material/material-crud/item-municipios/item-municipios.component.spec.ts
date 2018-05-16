import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMunicipiosComponent } from './item-municipios.component';

describe('ItemMunicipiosComponent', () => {
  let component: ItemMunicipiosComponent;
  let fixture: ComponentFixture<ItemMunicipiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMunicipiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
