import { createSlice } from '@reduxjs/toolkit';
import { productsDummyData } from './dummyData';

export interface ProductProps {
  description?: string;
  id: number;
  name: string;
  photo?: string;
  price: number;
  quantity?: number;
}

interface ProductsSliceProps {
  filter: string;
  products: ProductProps[],
  search: string;
}

const initialState: ProductsSliceProps = {
  filter: '',
  products: productsDummyData,
  search: '',
};

export const productsSlice = createSlice({
  initialState,
  name: 'products',
  reducers: {
    addProduct: (state, action) => {
      state.products = [
        ...state.products, 
        action.payload
      ];
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addProduct, setFilter, setSearch } = productsSlice.actions;

export default productsSlice.reducer;
