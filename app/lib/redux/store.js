import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../../Slice/cartSlice'

export const store = configureStore({
    reducer: {
         cart: todoReducer,
  },
});