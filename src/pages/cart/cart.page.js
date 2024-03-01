import { Products } from '../../components/products/products.component.js';
import { Title } from '../../components/title/title.component.js';
import { updateProductInCart } from '../../store/slices/cart.slice.ts';
import { useCartViewModel } from '../../store/viewModels/cart.viewModel.ts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useProductsViewModel } from '../../store/viewModels/products.viewModel.ts';

export const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products } = useProductsViewModel();
  const { cartProducts, productsInCart } = useCartViewModel(products);

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
      <Title label='Cart' />
      
      <Products 
        products={cartProducts} 
        productsInCart={productsInCart}
        onProductClick={handleOnProductClick} 
        onUpdateCartQuantity={handleOnUpdateCartQuantity}
      />
    </div>
  )
};