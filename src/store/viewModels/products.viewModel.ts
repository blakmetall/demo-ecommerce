import { RootState } from '../store';
import { useSelector } from 'react-redux';

export const useProductsViewModel = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return {
    products,
  };
};
