import { ProductsComponent } from '../../components/products/products.component.js';
import { updateProductInCart } from '../../store/slices/cart.slice.ts';
import { useCartViewModel } from '../../store/viewModels/cart.viewModel.ts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useProductsViewModel } from '../../store/viewModels/products.viewModel.ts';

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { products } = useProductsViewModel();
  const { productsInCart } = useCartViewModel(products);

  const handleOnProductClick = (productId, event) => {
    event.preventDefault();
    navigate(`/view-product/${productId}`)
  };

  const handleOnUpdateCartQuantity = (productId, quantity) => {
    dispatch(updateProductInCart({
      id: productId,
      quantity,
    }))
  };

  return (
    <div>
      <ProductsComponent 
        products={products} 
        productsInCart={productsInCart}
        onProductClick={handleOnProductClick} 
        onUpdateCartQuantity={handleOnUpdateCartQuantity}
      />
    </div>
  )
};