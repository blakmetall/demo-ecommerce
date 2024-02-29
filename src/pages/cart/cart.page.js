import { ProductsComponent } from '../../components/products/products.component.js';
import { useCartViewModel } from '../../store/viewModels/cart.viewModel.ts';
import { useNavigate } from 'react-router-dom';
import { useProductsViewModel } from '../../store/viewModels/products.viewModel.ts';

export const CartPage = () => {
  const navigate = useNavigate();

  const { products } = useProductsViewModel();
  const { cartProducts } = useCartViewModel(products);

  const handleOnProductClick = (productId, event) => {
    event.preventDefault();
    navigate('/view-product')
  };

  return (
    <div>
      <h3>Cart</h3>
      
      <ProductsComponent 
        products={cartProducts} 
        onProductClick={handleOnProductClick} 
      />
    </div>
  )
};