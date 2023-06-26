import { Product } from '../../overview/types/Product';

export interface CategoryData {
  id: number;
  image: string;
  name: string;
  description: string;
  published: boolean;
  products: Product[];
}
