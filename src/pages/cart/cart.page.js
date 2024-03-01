import { Products } from '../../components/products/products.component.js';
import { StyledSeparator, StyledSubtotal } from './cart.styled.js';
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
  const { cartProducts, cartSubtotal, hasProductsInCart, productsInCart } = useCartViewModel(products);

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
      
      {hasProductsInCart ? 
        <>
          <StyledSubtotal>Total in cart: ${cartSubtotal.toFixed(2)}</StyledSubtotal>
    
          <StyledSeparator />
          <StyledSeparator />
        </> : null
      }

      <Products 
        products={cartProducts} 
        productsInCart={productsInCart}
        onProductClick={handleOnProductClick} 
        onUpdateCartQuantity={handleOnUpdateCartQuantity}
      />
    </div>
  )
};