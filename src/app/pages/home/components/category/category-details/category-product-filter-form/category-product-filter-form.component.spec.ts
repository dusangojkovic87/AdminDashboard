import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductFilterFormComponent } from './category-product-filter-form.component';

describe('CategoryProductFilterFormComponent', () => {
  let component: CategoryProductFilterFormComponent;
  let fixture: ComponentFixture<CategoryProductFilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductFilterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryProductFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
