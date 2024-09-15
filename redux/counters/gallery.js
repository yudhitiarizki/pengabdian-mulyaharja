import { createSlice } from "@reduxjs/toolkit";
import { fetchGallery } from "../actions/gallery";

const Slice = createSlice({
  name: "category",
  initialState: {
    data: [],
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
      .addCase(fetchGallery.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchGallery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Slice.reducer;
