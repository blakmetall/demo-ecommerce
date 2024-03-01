import _ from 'lodash';
import { RootState } from '../store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useProductsViewModel = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const search = useSelector((state: RootState) => state.products.search);
  const filter = useSelector((state: RootState) => state.products.filter);

  const displayProducts = 
    !!search 
      ? products.filter(product => product.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1) 
      : products;

  const filteredProducts = filter !== '' 
    ? _.orderBy(displayProducts, ['price'], [filter])
    : displayProducts;

  const largestId = useMemo(() => {
    return products.length ? products.reduce((largestId, product) => {
      return product.id > largestId ? product.id : largestId;
    }, 0) : 0;
  }, [products]);

  return {
    largestId,
    nextId: largestId + 1,
    products,
    filteredProducts,
    search,
  };
};
