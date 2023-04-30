import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStaffModalComponent } from './edit-staff-modal.component';

describe('EditStaffModalComponent', () => {
  let component: EditStaffModalComponent;
  let fixture: ComponentFixture<EditStaffModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStaffModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStaffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
