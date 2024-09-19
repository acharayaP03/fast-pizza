import { createSlice } from '@reduxjs/toolkit';
import { updateOrder } from '../../services/apiRestaurant';

const initialCartState = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: 'Mediterranean',
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
    // {
    //   pizzaId: 6,
    //   name: 'Vegetale',
    //   quantity: 1,
    //   unitPrice: 13,
    //   totalPrice: 13,
    // },
    // {
    //   pizzaId: 11,
    //   name: 'Spinach and Mushroom',
    //   quantity: 1,
    //   unitPrice: 15,
    //   totalPrice: 15,
    // },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      if (!state.cart) {
        state.cart = [];
      }

      const existingItem = state.cart.find(
        (item) => item.pizzaId === newItem.pizzaId,
      );
      console.log('state.cart existing item', existingItem);

      // if (!existingItem) {
      //   state.cart.push({
      //     pizzaId: newItem.pizzaId,
      //     name: newItem.name,
      //     quantity: 1,
      //     unitPrice: newItem.price,
      //     totalPrice: newItem.price,
      //   });
      // } else {
      //   existingItem.quantity++;
      //   existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      // }

      state.cart.push({
        pizzaId: newItem.pizzaId,
        name: newItem.name,
        quantity: 1,
        unitPrice: newItem.unitPrice,
        totalPrice: newItem.unitPrice,
      });
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

// TODO redux reselect -> below code will cause issues if the app gets bigger. use reselect to optimize performance.

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getPizzaInCart = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id);
};
