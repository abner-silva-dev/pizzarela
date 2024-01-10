import { createSlice } from "@reduxjs/toolkit";

// {
//   pizzaId: 12,
//   name: "Mediterranean",
//   quantity: 2,
//   unitPrice: 16,
//   totalPrice: 32,
// },

const initialState = {
  // cart: [],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // Payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // Payload = IdItem
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // Payload = {idItem}
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (!item) return;
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      // Payload = {idItem}
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (!item) return;
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;

      if (item.quantity === 0)
        return cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, pizza) => acc + pizza.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce(
    (acc, pizza) => acc + pizza.quantity * pizza.unitPrice,
    0,
  );

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity ?? 0;
