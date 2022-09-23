import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AmountCountDetails } from '../types/AmountCountDetails';

@Injectable({
  providedIn: 'root',
})
export class OrdersCountService {
  constructor(private http: HttpClient) {}

  getOrdersCountDetails(): Observable<AmountCountDetails> {
    return this.http.get<AmountCountDetails>(
      'http://localhost:4200/assets/fakeBackend/overview/getAmountCount.json'
    );
  }
}
