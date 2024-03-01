import { Products } from '../../components/products/products.component.js';
import { updateProductInCart } from '../../store/slices/cart.slice.ts';
import { useCartViewModel } from '../../store/viewModels/cart.viewModel.ts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useProductsViewModel } from '../../store/viewModels/products.viewModel.ts';

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { filteredProducts } = useProductsViewModel();
  const { productsInCart } = useCartViewModel(filteredProducts);

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
    <Products 
      products={filteredProducts} 
      productsInCart={productsInCart}
      onProductClick={handleOnProductClick} 
      onUpdateCartQuantity={handleOnUpdateCartQuantity}
    />
  )
};