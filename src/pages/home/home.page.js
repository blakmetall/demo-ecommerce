import { ProductsComponent } from '../../components/products/products.component.js';
import { useNavigate } from 'react-router-dom';
import { useProductsViewModel } from '../../store/viewModels/products.viewModel.ts';

export const HomePage = () => {
  const navigate = useNavigate();
  
  const { products } = useProductsViewModel();

  const handleOnProductClick = (productId, event) => {
    event.preventDefault();
    navigate(`/view-product/${productId}`)
  };

  return (
    <div>
      <ProductsComponent products={products} onProductClick={handleOnProductClick} />
    </div>
  )
};