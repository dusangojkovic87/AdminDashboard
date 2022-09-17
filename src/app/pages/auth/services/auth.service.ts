import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { LoginRequest } from '../types/LoginRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  RegisterUser(user: User): Observable<User> {
    //get fake db data
    return this.http.get<User>(
      'http://localhost:4200/assets/fakeBackend/register.json'
    );
  }

  LoginUser(loginRequest: LoginRequest) {
    //get fake db data
    return this.http.get<User>(
      'http://localhost:4200/assets/fakeBackend/register.json'
    );
  }
}
