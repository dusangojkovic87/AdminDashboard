import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecentOrders } from '../types/recentOrders';

@Injectable({
  providedIn: 'root',
})
export class RecentOrdersService {
  constructor(private http: HttpClient) {}

  getRecentOrders(): Observable<RecentOrders[]> {
    let baseUrl = environment.baseUrl;
    return this.http.get<RecentOrders[]>(
      baseUrl + '/assets/fakeBackend/overview/getRecentOrders.json'
    );
  }
}
