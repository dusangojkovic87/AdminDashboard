import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AmountCountDetails } from '../types/AmountCountDetails';

@Injectable({
  providedIn: 'root',
})
export class OrdersCountService {
  constructor(private http: HttpClient) {}

  getOrdersCountDetails(): Observable<AmountCountDetails> {
    let baseUrl = environment.baseUrl;
    return this.http.get<AmountCountDetails>(
      baseUrl + '/assets/fakeBackend/overview/getAmountCount.json'
    );
  }
}
