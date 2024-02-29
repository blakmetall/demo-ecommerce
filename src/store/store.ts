import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from './slices/cart.slice.ts';
import productsReducer from './slices/products.slice.ts';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'rootState',
  storage: AsyncStorage,
  whitelist: ['cart', 'products'],
};

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({ serializableCheck: false }),
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
