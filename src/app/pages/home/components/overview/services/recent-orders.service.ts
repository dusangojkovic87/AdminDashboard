import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecentOrders } from '../types/recentOrders';

@Injectable({
  providedIn: 'root',
})
export class RecentOrdersService {
  constructor(private http: HttpClient) {}

  getRecentOrders(): Observable<RecentOrders[]> {
    return this.http.get<RecentOrders[]>(
      ' http://localhost:4200/assets/fakeBackend/overview/getRecentOrders.json'
    );
  }
}
