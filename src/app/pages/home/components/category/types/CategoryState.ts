import { CategoryData } from './CategoryData';

export interface CategoryState {
  categories: Array<CategoryData> | null;
  isModalOpen: boolean;
  isEditCategoryModalOpen: boolean;
  isDeleteModalOpen: boolean;
  categoryToEdit: CategoryData | null;
  categoryToDelete: number | null;
  errors: string | null;
}
