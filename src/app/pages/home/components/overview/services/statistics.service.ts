import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BestSellingData } from '../types/BestSellingData';
import { SaleOrdersData } from '../types/SaleOrdersData';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getSaleStatistic(): Observable<SaleOrdersData> {
    let baseUrl = environment.baseUrl;
    return this.http.get<SaleOrdersData>(
      baseUrl + '/assets/fakeBackend/saleStatistics/salesAndOrders.json'
    );
  }

  getBestSellingData(): Observable<BestSellingData> {
    let baseUrl = environment.baseUrl;
    return this.http.get<BestSellingData>(
      baseUrl + '/assets/fakeBackend/saleStatistics/bestSelling.json'
    );
  }
}
