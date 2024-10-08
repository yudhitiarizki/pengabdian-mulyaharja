import { createSlice } from "@reduxjs/toolkit";
import { fetchProfile, fetchContact } from "../actions/profile";

const getSavedProfile = () => {
  if (typeof window !== "undefined") {
    const savedProfile = localStorage.getItem("profileDetails");
    return savedProfile ? JSON.parse(savedProfile) : {};
  }
  return {};
};

const Slice = createSlice({
  name: "profile",
  initialState: {
    details: getSavedProfile(),
    contact: [],
    message: null,
    status: "idle",
    error: null,
  },
  reducers: {
    // Tambahkan reducers tambahan jika perlu
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.details = action.payload.data;
        state.message = action.payload.message;

        localStorage.setItem(
          "profileDetails",
          JSON.stringify(action.payload.data)
        );
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchContact.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contact = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Slice.reducer;
