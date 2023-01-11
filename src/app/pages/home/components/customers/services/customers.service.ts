import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomersData } from '../types/CustomersData';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<CustomersData[]> {
    let baseUrl = environment.baseUrl;

    return this.http.get<CustomersData[]>(
      baseUrl + '/assets/fakeBackend/customers/customers.json'
    );
  }
}
