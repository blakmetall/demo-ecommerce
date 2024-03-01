import { useCartViewModel } from './cart.viewModel.ts';
import { useProductsViewModel } from './products.viewModel.ts';

export const useProductViewModel = (productId: number) => {
  const { products } = useProductsViewModel();
  const { productsInCart } = useCartViewModel();

  const product = products.find(product => product.id === Number(productId));
  const cartProduct = productsInCart.find(({ id }) => id === Number(productId));
  const cartQuantity = !!cartProduct ? cartProduct.quantity : 0;

  return {
    cartQuantity,
    hasProduct: !!product,
    product,
  };
};
