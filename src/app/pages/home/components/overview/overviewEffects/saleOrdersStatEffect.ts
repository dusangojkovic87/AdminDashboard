import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getSaleStatsFail,
  getSaleStatsSucces,
} from '../overviewActions/saleStatisticsActions';
import { saleStatisticsActionTypes } from '../overviewActionTypes/saleStatisticsActionTypes';
import { StatisticsService } from '../services/statistics.service';
import { SaleOrdersData } from '../types/SaleOrdersData';

@Injectable()
export class SaleOrdersStatEffect {
  constructor(
    private statService: StatisticsService,
    private $actions: Actions
  ) {}

  $getSaleOrdersStat = createEffect(() =>
    this.$actions.pipe(
      ofType(saleStatisticsActionTypes.GET_SALE_STATS),
      switchMap(() => {
        return this.statService.getSaleStatistic();
      }),
      map((data: SaleOrdersData) => {
        return getSaleStatsSucces({ saleOrdersStats: data });
      }),
      catchError((error) => {
        return of(getSaleStatsFail({ errors: error }));
      })
    )
  );
}
