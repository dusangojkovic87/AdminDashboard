import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
