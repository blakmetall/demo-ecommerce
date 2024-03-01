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
  products: ProductProps[],
  search: string;
}

const initialState: ProductsSliceProps = {
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
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  },
});

export const { addProduct, setSearch } = productsSlice.actions;

export default productsSlice.reducer;
