import { CategoryData } from './CategoryData';

export interface CategoryState {
  categories: Array<CategoryData> | null;
  isModalOpen: boolean;
  errors: string | null;
}
