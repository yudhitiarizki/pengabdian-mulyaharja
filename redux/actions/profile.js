import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";

export const fetchProfile = createAsyncThunk(
  "category/fetchProfile",
  async () => {
    const response = await api.get("/profile");
    return response.data;
  }
);

export const fetchContact = createAsyncThunk(
  "category/fetchContact",
  async () => {
    const response = await api.get("/profile/contact");
    return response.data;
  }
);
