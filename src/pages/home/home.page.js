import { useProductsViewModel } from '../../store/viewModels/products.viewModel.ts';
import { ProductsComponent } from './products/products.component.js';

export const HomePage = () => {
  const { products } = useProductsViewModel();

  return (
    <div>
      <ProductsComponent products={products} />
    </div>
  )
};