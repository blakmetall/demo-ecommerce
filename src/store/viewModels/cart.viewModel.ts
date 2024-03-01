import { ProductProps } from '../slices/products.slice';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

export const useCartViewModel = (storeProducts: ProductProps[] = []) => {
  const productsInCart = useSelector((state: RootState) => state.cart.productsInCart);

  const cartProducts = productsInCart
    .filter(({ quantity }) => quantity > 0)
    .map(({ id: productId, quantity }) => {
      const product = storeProducts.find(({ id }) => id === productId);
      return { ...product, quantity };
    });

  const cartSubtotal = cartProducts.reduce((sum, product) => {
    const itemSubtotal = product.quantity * product.price;

    return sum + itemSubtotal;
  }, 0);

  return {
    cartProducts,
    cartSubtotal,
    hasProductsInCart: Boolean(cartProducts.length),
    productsInCart,
  };
};
