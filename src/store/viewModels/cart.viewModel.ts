import { ProductProps } from '../slices/products.slice';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

export const useCartViewModel = (storeProducts: ProductProps[]) => {
  const productsIds = useSelector((state: RootState) => state.cart.productsIds);

  const cartProducts = productsIds
    .map(productId => storeProducts.find(({ id }) => id === productId))
    .filter(product => !!product);

  return {
    cartProducts,
  };
};
