import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AmountDetails } from '../types/AmountDetails';

@Injectable({
  providedIn: 'root',
})
export class OrdersAmountService {
  constructor(private http: HttpClient) {}

  getAmountDetails(): Observable<AmountDetails> {
    let baseUrl = environment.baseUrl;
    return this.http.get<AmountDetails>(
      baseUrl + '/assets/fakeBackend/overview/getAmountDetails.json'
    );
  }
}
