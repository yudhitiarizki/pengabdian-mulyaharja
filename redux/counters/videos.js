import { createSlice } from "@reduxjs/toolkit";
import { fetchVideos, fetchDetailVideos } from "../actions/videos";

const Slice = createSlice({
  name: "videos",
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
      .addCase(fetchVideos.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDetailVideos.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchDetailVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.details = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchDetailVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Slice.reducer;
