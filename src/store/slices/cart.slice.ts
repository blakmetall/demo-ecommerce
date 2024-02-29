import { createSlice } from '@reduxjs/toolkit';

export interface CartSliceProps {
  productsIds: number[],
}

const initialState: CartSliceProps = {
  productsIds: [1, 3, 5],
};

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addProductToCart: (state, action) => {
      state.productsIds = [
        ...state.productsIds, 
        action.payload
      ];
    },
    removeProductFromCart: (state, action) => {
      state.productsIds = state.productsIds.filter(productId => productId !== action.payload);
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
