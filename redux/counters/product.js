import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategoryProduct,
  fetchProduct,
  fetchDetailProduct,
} from "../actions/product";

const Slice = createSlice({
  name: "products",
  initialState: {
    data: {
      data: [],
    },
    details: {},
    category: [],
    details: {},
    message: null,
    status: "idle",
    error: null,
  },
  reducers: {
    // Tambahkan reducers tambahan jika perlu
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCategoryProduct.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchCategoryProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.category = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchCategoryProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDetailProduct.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchDetailProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.details = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchDetailProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Slice.reducer;
