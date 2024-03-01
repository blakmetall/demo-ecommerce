import { useProductsViewModel } from './products.viewModel.ts';

export const useProductViewModel = (productId: number) => {
  const { products } = useProductsViewModel();

  const product = products.find(product => product.id === Number(productId));

  return {
    hasProduct: !!product,
    product,
  };
};
