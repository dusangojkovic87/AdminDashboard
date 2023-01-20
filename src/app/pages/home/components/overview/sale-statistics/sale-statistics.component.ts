import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ChartConfiguration } from 'chart.js';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/appReducer/appReducer';
import {
  getBestSellingProductStat,
  getSaleStats,
} from '../overviewActions/saleStatisticsActions';
import { BestSellingData } from '../types/BestSellingData';
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
  isWeeklySaleChartDataReady: boolean = false;
  isBestSellingChartDataReady: boolean = false;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.getSaleOrdersStatAction();
    this.getSaleOrderFromStore();
    this.getBestSellingStatisticsAction();
    this.getBestSellingStatisticsFromStore();
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

  public bestSellingProductLabels: string[] = ['', '', ''];

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
          this.isWeeklySaleChartDataReady = true;
        }
      });
  }

  getBestSellingStatisticsAction() {
    this.store.dispatch(getBestSellingProductStat());
  }

  getBestSellingStatisticsFromStore() {
    this.storeSub = this.store
      .select((state) => state.bestSellingStatState.bestSellingStat)
      .subscribe((data: any) => {
        if (data) {
          this.setBestSellingData(data);
          this.isBestSellingChartDataReady = true;
        }
      });
  }

  setSaleAndOrdersData(data: any) {
    this.weeklySaleLabels[0].data = data[0].sales;
    this.weeklySaleLabels[1].data = data[0].orders;
  }

  setBestSellingData(data: any) {
    this.bestSellingProductsData[0].data = data[0].bestSsellingProductsData;
    this.bestSellingProductLabels = data[0].bestSellingListNames;
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
