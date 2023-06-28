import { CategoryData } from './CategoryData';

export interface CategoryState {
  categories: CategoryData[];
  isModalOpen: boolean;
  isEditCategoryModalOpen: boolean;
  isDeleteModalOpen: boolean;
  categoryToEdit: CategoryData | null;
  categoryToDelete: number | null;
  errors: string | null;
  filteredCategories: CategoryData[];
  isCategoryPublishedStatusChanged: boolean;
  categoryById: CategoryData;
  isDeleteProductModalOpen: boolean;
  productToDeleteId: number;
}
