import { createSlice } from "@reduxjs/toolkit";
import { fetchActivity, fetchDetailActivity } from "../actions/activity";

const Slice = createSlice({
  name: "activity",
  initialState: {
    data: {
      data: [],
    },
    recent: [],
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
      .addCase(fetchActivity.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchActivity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchActivity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDetailActivity.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchDetailActivity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.details = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchDetailActivity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Slice.reducer;
