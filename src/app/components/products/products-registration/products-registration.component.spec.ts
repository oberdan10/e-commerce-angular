import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRegistrationComponent } from './products-registration.component';

describe('ProductsRegistrationComponent', () => {
  let component: ProductsRegistrationComponent;
  let fixture: ComponentFixture<ProductsRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
