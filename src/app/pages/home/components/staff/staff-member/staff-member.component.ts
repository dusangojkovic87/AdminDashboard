import { Component, Input, OnInit } from '@angular/core';
import { StaffMember } from '../types/StaffMember';

@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.scss'],
})
export class StaffMemberComponent implements OnInit {
  @Input('staffMember') staffMember?: StaffMember;

  constructor() {}

  ngOnInit(): void {}
}
