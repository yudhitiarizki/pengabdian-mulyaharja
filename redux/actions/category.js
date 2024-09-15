import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    const response = await api.get("/category");
    return response.data;
  }
);

export const fetchDetailCategory = createAsyncThunk(
  "category/fetchDetailCategory",
  async (id) => {
    const response = await api.get("/category/" + id);
    return response.data;
  }
);
