import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-sale-statistics',
  templateUrl: './sale-statistics.component.html',
  styleUrls: ['./sale-statistics.component.scss'],
})
export class SaleStatisticsComponent implements OnInit {
  // line chart
  public doughnutChartLabels: string[] = ['Sales', 'Orders'];

  public weeklySaleLabels: ChartConfiguration<'line'>['data']['datasets'] = [
    {
      data: [50, 220, 10],
      label: 'Sales',
      backgroundColor: '#0fa66e',
      borderColor: '#0fa66e',
    },
    {
      data: [50, 150, 120],
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

  public doughnutChartType = 'doughnut';

  public bestSellingProductOptions: ChartConfiguration<'doughnut'>['options'] =
    {
      responsive: true,
      maintainAspectRatio: false,
    };

  constructor() {}

  ngOnInit(): void {}
}
