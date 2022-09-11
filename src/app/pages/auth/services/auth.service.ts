import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  RegisterUser(user: User): Observable<User> {
    return this.http.get<User>(
      'http://localhost:4200/assets/fakeBackend/register.json'
    );
  }
}
