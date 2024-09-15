import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ currentPage = 1 }) => {
    const response = await api.get(`/videos?page=${currentPage}`);
    return response.data;
  }
);

export const fetchDetailVideos = createAsyncThunk(
  "videos/fetchDetailVideos",
  async (id) => {
    const response = await api.get("/videos/" + id);
    return response.data;
  }
);
