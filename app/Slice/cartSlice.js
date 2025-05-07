// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      if (existingItem) {
        // Subtract old quantity from totalQuantity
        state.totalQuantity -= existingItem.quantity;

        // Update the quantity with the new one
        existingItem.quantity = quantity;
      } else {
        // New item, just push
        state.items.push({ ...product, quantity });
      }

      // Add the updated quantity to totalQuantity
      state.totalQuantity += quantity;
    },

    removeFromCart(state, action) {
      const removedItem = state.items.find(item => item.id === action.payload);
      if (removedItem) {
        state.totalQuantity -= removedItem.quantity;
      }

      state.items = state.items.filter(item => item.id !== action.payload);
    },
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
