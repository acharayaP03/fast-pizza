import { createSlice } from '@reduxjs/toolkit';
import { updateOrder } from '../../services/apiRestaurant';

const initialCartState = {
  cart: [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: 'Vegetale',
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: 'Spinach and Mushroom',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find(
        (item) => item.pizzaId === newItem.pizzaId,
      );

      if (!existingItem) {
        state.cart.push({
          pizzaId: newItem.pizzaId,
          name: newItem.name,
          quantity: 1,
          unitPrice: newItem.price,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.pizzaId !== id);
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const item = state.cart.find((item) => item.pizzaId === id);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
      // updateOrder(state.cart);
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const item = state.cart.find((item) => item.pizzaId === id);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      // updateOrder(state.cart);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
