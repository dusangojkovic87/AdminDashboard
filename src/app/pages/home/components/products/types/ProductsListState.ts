import { Product } from './Product';

export interface ProductListState {
  products: Product[];
  isAddProductModalOpen: boolean;
  isEditProductModalOpen: boolean;
  productToEdit: Product | null;
  filteredProducts: Product[];
}
