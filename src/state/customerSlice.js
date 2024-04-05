// customerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const insertCustomer = createAsyncThunk(
  'customer/insertCustomer',
  async (customer, { rejectWithValue }) => {
    try {
      const response = await axios.post('/client/insertCustomer', customer);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(insertCustomer.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(insertCustomer.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(insertCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default customerSlice.reducer;
