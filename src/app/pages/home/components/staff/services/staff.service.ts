import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StaffMember } from '../types/StaffMember';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private http: HttpClient) {}

  getStaff(): Observable<StaffMember[]> {
    let baseUrl = environment.baseUrl;
    return this.http.get<StaffMember[]>(
      baseUrl + '/assets/fakeBackend/staff/staff.json'
    );
  }

  deleteStaff(id: number) {
    //fake delete to server
    return of(id);
  }

  editStaffMember(member: StaffMember) {
    //fake edit to server
    return of(member);
  }
}
