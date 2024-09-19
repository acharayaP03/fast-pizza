import { configureStore, combineReducers } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({
  user: persistedReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
