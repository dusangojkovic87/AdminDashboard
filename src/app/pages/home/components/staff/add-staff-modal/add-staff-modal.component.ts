import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-staff-modal',
  templateUrl: './add-staff-modal.component.html',
  styleUrls: ['./add-staff-modal.component.scss'],
})
export class AddStaffModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  uploadedImage(event: any) {
    console.log('slika', event);
  }
}
