import { configureStore } from '@reduxjs/toolkit';
import NavSlice  from "./slices/NavSlice";

export const Store = configureStore({
  reducer: {
    nav: NavSlice
  }
})
