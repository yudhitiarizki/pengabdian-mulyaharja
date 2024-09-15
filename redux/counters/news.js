import { createSlice } from "@reduxjs/toolkit";
import { fetchNews, fetchRecentNews, fetchDetailNews } from "../actions/news";

const Slice = createSlice({
  name: "news",
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
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchRecentNews.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchRecentNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recent = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchRecentNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDetailNews.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchDetailNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.details = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchDetailNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Slice.reducer;
