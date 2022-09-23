import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AmountDetails } from '../types/AmountDetails';

@Injectable({
  providedIn: 'root',
})
export class OrdersAmountService {
  constructor(private http: HttpClient) {}

  getAmountDetails(): Observable<AmountDetails> {
    return this.http.get<AmountDetails>(
      'http://localhost:4200/assets/fakeBackend/overview/getAmountDetails.json'
    );
  }
}
