import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ChartConfiguration } from 'chart.js';
import { BehaviorSubject, filter, map, Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import { getSaleStats } from '../overviewActions/saleStatisticsActions';
import { SaleOrdersData } from '../types/SaleOrdersData';

@Component({
  selector: 'app-sale-statistics',
  templateUrl: './sale-statistics.component.html',
  styleUrls: ['./sale-statistics.component.scss'],
})
export class SaleStatisticsComponent implements OnInit, OnDestroy {
  saleOrdersData?: SaleOrdersData;
  storeSub?: Subscription;
  storeAction?: Subscription;
  isChartDataReady: boolean = false;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.getSaleOrdersStatAction();
    this.getSaleOrderFromStore();
  }

  // line chart
  public doughnutChartLabels: string[] = ['Sales', 'Orders'];

  public weeklySaleLabels: ChartConfiguration<'line'>['data']['datasets'] = [
    {
      data: [0, 0, 0],
      label: 'Sales',
      backgroundColor: '#0fa66e',
      borderColor: '#0fa66e',
    },
    {
      data: [0, 0, 0],
      label: 'Orders',
      backgroundColor: '#0487d9',
      borderColor: '#0487d9',
    },
  ];

  public weeklySalesOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
  };

  //dougnout chart

  public bestSellingProductLabels: string[] = [
    'Cabbage',
    'Clementine',
    'Aloe Vera Leaf',
  ];

  public bestSellingProductsData: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [
      {
        data: [30, 50, 90],
        backgroundColor: ['orange', '#0487d9', '#763df2'],
      },
    ];

  public bestSellingProductOptions: ChartConfiguration<'doughnut'>['options'] =
    {
      responsive: true,
      maintainAspectRatio: false,
    };

  getSaleOrdersStatAction() {
    this.store.dispatch(getSaleStats());
  }

  getSaleOrderFromStore() {
    this.storeSub = this.store
      .select((state) => state.saleOrdersStatState.salesStatistics)
      .subscribe((data: any) => {
        if (data) {
          this.setSaleAndOrdersData(data);
          this.isChartDataReady = true;
        }
      });
  }

  setSaleAndOrdersData(data: any) {
    this.weeklySaleLabels[0].data = data[0].sales;
    this.weeklySaleLabels[1].data = data[0].orders;
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
