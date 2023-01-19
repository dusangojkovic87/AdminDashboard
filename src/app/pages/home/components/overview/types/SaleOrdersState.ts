import { SaleOrdersData } from '../types/SaleOrdersData';

export interface SaleOrdersState {
  salesStatistics: SaleOrdersData | null;
  errors: string[] | null;
}
