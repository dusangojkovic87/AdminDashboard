import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecordModalWrrapperComponent } from './delete-record-modal-wrrapper.component';

describe('DeleteRecordModalWrrapperComponent', () => {
  let component: DeleteRecordModalWrrapperComponent;
  let fixture: ComponentFixture<DeleteRecordModalWrrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRecordModalWrrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRecordModalWrrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
