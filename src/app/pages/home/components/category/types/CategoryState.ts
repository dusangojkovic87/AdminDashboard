import { CategoryData } from './CategoryData';

export interface CategoryState {
  categories: Array<CategoryData> | null;
  isModalOpen: boolean;
  isDeleteModalOpen: boolean;
  categoryToDelete: number | null;
  errors: string | null;
}
