import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EditProfileService {
  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<User> {
    const baseUrl = environment.baseUrl;
    return this.http.get<User>(
      baseUrl + '/assets/fakeBackend/profile/user.json'
    );
  }

  updateUser(user: User): Observable<User> {
    //fake post update
    return of(user);
  }
}
