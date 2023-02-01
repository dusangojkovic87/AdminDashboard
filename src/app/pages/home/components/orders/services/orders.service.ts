import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerOrder } from '../../customer-order-list/types/CustomerOrder';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<CustomerOrder[]> {
    let baseUrl = environment.baseUrl;
    return this.http.get<CustomerOrder[]>(
      baseUrl + '/assets/fakeBackend/customer-orders/customer-orders.json'
    );
  }

  changeOrderStatus(order: CustomerOrder, newStatus: string) {
    //fake post to server
    return of({ orderStatusChanged: true });
  }
}
