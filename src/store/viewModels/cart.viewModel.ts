import { ProductProps } from '../slices/products.slice';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

export const useCartViewModel = (storeProducts: ProductProps[] = []) => {
  const productsInCart = useSelector((state: RootState) => state.cart.productsInCart);

  const cartProducts = productsInCart
    .map(({ id: productId, quantity }) => {
      const product = storeProducts.find(({ id }) => id === productId);
      return { ...product, quantity };
    });

  return {
    cartProducts,
    productsInCart,
  };
};
