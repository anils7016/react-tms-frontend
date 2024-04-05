// store.js
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customerSlice';

export default configureStore({
  reducer: {
    customer: customerReducer,
  },
});
