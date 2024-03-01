import { createSlice } from '@reduxjs/toolkit';
import { cartDummyData } from './dummyData';

interface CartProductProps {
  id: number;
  quantity: number;
}

interface CartSliceProps {
  productsInCart: CartProductProps[],
}

const initialState: CartSliceProps = {
  productsInCart: cartDummyData,
};

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addProductToCart: (state, action) => {
      state.productsInCart = [
        ...state.productsInCart, 
        action.payload
      ];
    },

    updateProductInCart: (state, action: any) => {
      const item = state.productsInCart.find(({ id }) => action.payload.id === id);
      const inCart = !!item;

      if (inCart) {
        state.productsInCart = state.productsInCart.map(item => {
          const shouldUpdateQuantity = item.id === action.payload.id;

          if (shouldUpdateQuantity) {
            return {...item, quantity: action.payload.quantity};
          }

          return item;
        });
      } else {
        state.productsInCart = [
          ...state.productsInCart,
          {
            id: action.payload.id,
            quantity: action.payload.quantity,
          }
        ];
      }  
    },
  },
});

export const { addProductToCart, updateProductInCart } = cartSlice.actions;

export default cartSlice.reducer;
