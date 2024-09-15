import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";

export const fetchActivity = createAsyncThunk(
  "videos/fetchActivity",
  async ({ currentPage = 1 }) => {
    const response = await api.get(`/activity?page=${currentPage}`);
    return response.data;
  }
);

export const fetchDetailActivity = createAsyncThunk(
  "videos/fetchDetailActivity",
  async (id) => {
    const response = await api.get("/activity/" + id);
    return response.data;
  }
);
