import { RootState } from '../store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useProductsViewModel = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const search = useSelector((state: RootState) => state.products.search);

  const filteredProducts = !!search 
    ? products.filter(product => product.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1) 
    : products;

  const largestId = useMemo(() => {
    return products.length ? products.reduce((largestId, product) => {
      return product.id > largestId ? product.id : largestId;
    }, 0) : 0;
  }, [products]);

  return {
    largestId,
    nextId: largestId + 1,
    products: filteredProducts,
    search,
  };
};
