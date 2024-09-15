import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory, fetchDetailCategory } from "../actions/category";

const Slice = createSlice({
  name: "category",
  initialState: {
    data: {
      data: [],
    },
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
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDetailCategory.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchDetailCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.details = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchDetailCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Slice.reducer;
