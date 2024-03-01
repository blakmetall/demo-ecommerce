import { RootState } from '../store';
import { useSelector } from 'react-redux';

export const useProductsViewModel = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const search = useSelector((state: RootState) => state.products.search);

  const filteredProducts = !!search 
    ? products.filter(product => product.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1) 
    : products;

  return {
    products: filteredProducts,
    search,
  };
};
