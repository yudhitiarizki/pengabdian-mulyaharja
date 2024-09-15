import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";

export const fetchGallery = createAsyncThunk(
  "category/fetchGallery",
  async () => {
    const response = await api.get("/gallery");
    return response.data;
  }
);
