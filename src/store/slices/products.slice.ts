import { createSlice } from '@reduxjs/toolkit';

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  description?: string;
  photo?: string;
}

interface ProductsSliceProps {
  products: ProductProps[],
}

const initialState: ProductsSliceProps = {
  products: [
    {
      id: 1,
      name: 'Title 1',
      description: 'Description...',
      photo: 'https://picsum.photos/200/300',
      price: 10,
    },
    {
      id: 2,
      name: 'Title 2',
      description: 'Description...',
      photo: 'https://picsum.photos/200/300',
      price: 20,
    },
    {
      id: 3,
      name: 'Title 3',
      description: 'Description...',
      photo: 'https://picsum.photos/200/300',
      price: 30,
    },
    {
      id: 4,
      name: 'Title 4',
      description: 'Description...',
      photo: 'https://picsum.photos/200/300',
      price: 40,
    },
  ],
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
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
