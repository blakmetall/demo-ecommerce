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
      const productId = action.payload.id;
      const newQuantity = action.payload.quantity;

      if (newQuantity < 0) {
        state.productsInCart = state.productsInCart.filter(({ id }) => productId === id);
      } else {
        const item = state.productsInCart.find(({ id }) => productId === id);
        const inCart = !!item;
  
        if (inCart) {
          state.productsInCart = state.productsInCart.map(item => {
            const shouldUpdateQuantity = item.id === productId;
  
            if (shouldUpdateQuantity) {
              return {...item, quantity: newQuantity};
            }
  
            return item;
          });
        } else {
          state.productsInCart = [
            ...state.productsInCart,
            {
              id: productId,
              quantity: newQuantity,
            }
          ];
        }  
      }

    },
  },
});

export const { addProductToCart, updateProductInCart } = cartSlice.actions;

export default cartSlice.reducer;
