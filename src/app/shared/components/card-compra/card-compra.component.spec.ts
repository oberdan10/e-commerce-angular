import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompraComponent } from './card-compra.component';

describe('CardCompraComponent', () => {
  let component: CardCompraComponent;
  let fixture: ComponentFixture<CardCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
