import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerOrder } from '../types/CustomerOrder';

@Injectable({
  providedIn: 'root',
})
export class CustomerOrdersService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<CustomerOrder[]> {
    let baseUrl = environment.baseUrl;
    return this.http.get<CustomerOrder[]>(
      baseUrl + '/assets/fakeBackend/customer-orders/customer-orders.json'
    );
  }

  changeOrderStatus(orderId: number, status: string) {
    //fake post to server
    // console.log('status changed');
    return of({ isStatusChanged: true });
  }
}
