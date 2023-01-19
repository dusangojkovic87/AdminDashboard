import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndSearchStaffComponent } from './add-and-search-staff.component';

describe('AddAndSearchStaffComponent', () => {
  let component: AddAndSearchStaffComponent;
  let fixture: ComponentFixture<AddAndSearchStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndSearchStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndSearchStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
