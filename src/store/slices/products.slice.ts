import { createSlice } from '@reduxjs/toolkit';

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
}

const initialState: ProductsSliceProps = {
  products: [
    {
      id: 1,
      name: 'Title 1',
      description: 'Description...',
      photo: 'https://picsum.photos/600/400',
      price: 10,
    },
    {
      id: 2,
      name: 'Title 2',
      description: 'Description...',
      photo: 'https://picsum.photos/600/400',
      price: 20,
    },
    {
      id: 3,
      name: 'Title 3',
      description: 'Description...',
      photo: 'https://picsum.photos/600/400',
      price: 30,
    },
    {
      id: 4,
      name: 'Title 4',
      description: 'Description...',
      photo: 'https://picsum.photos/600/400',
      price: 40,
    },
    {
      id: 5,
      name: 'Title 5',
      description: 'Description...',
      photo: 'https://picsum.photos/600/400',
      price: 50,
    },
    {
      id: 6,
      name: 'Title 6',
      description: 'Description...',
      photo: 'https://picsum.photos/600/400',
      price: 60,
    },
    {
      id: 7,
      name: 'Title 7',
      description: 'Description...',
      photo: 'https://picsum.photos/600/400',
      price: 70,
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
