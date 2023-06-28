import { Product } from '../../overview/types/Product';
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
  productsByCategoryId: Product[];
  isDeleteProductModalOpen: boolean;
  productToDeleteId: number;
  filteredProductsByCategoryId: Product[];
}
