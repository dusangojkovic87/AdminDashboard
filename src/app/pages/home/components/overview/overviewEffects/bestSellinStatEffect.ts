import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, of } from 'rxjs';
import {
  getBestSellingProductStat,
  getBestSellingProductStatFail,
  getBestSellingProductStatSuccess,
} from '../overviewActions/saleStatisticsActions';
import { StatisticsService } from '../services/statistics.service';

@Injectable()
export class BestSellingStatEffect {
  constructor(
    private $actions: Actions,
    private statisticsService: StatisticsService
  ) {}

  $getBestSellingStatistics = createEffect(() =>
    this.$actions.pipe(
      ofType(getBestSellingProductStat),
      switchMap(() => {
        return this.statisticsService.getBestSellingData();
      }),
      map((data) => {
        return getBestSellingProductStatSuccess({ topSelling: data });
      }),
      catchError((error) => {
        return of(getBestSellingProductStatFail({ errors: error }));
      })
    )
  );
}
