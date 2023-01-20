import { BestSellingData } from './BestSellingData';

export interface BestSellingStatState {
  bestSellingStat: BestSellingData | null;
  errors: string[] | null;
}
