import { createSlice } from '@reduxjs/toolkit';

interface CartProductProps {
  id: number;
  quantity: number;
}

export interface CartSliceProps {
  productsInCart: CartProductProps[],
}

const initialState: CartSliceProps = {
  productsInCart: [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 3,
    },
    {
      id: 4,
      quantity: 2,
    },
  ],
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

    removeProductFromCart: (state, action) => {
      state.productsInCart = state.productsInCart.filter(productId => productId !== action.payload);
    },
  },
});

export const { addProductToCart, removeProductFromCart, updateProductInCart } = cartSlice.actions;

export default cartSlice.reducer;
