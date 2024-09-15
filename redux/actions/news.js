import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";

export const fetchNews = createAsyncThunk(
  "videos/fetchNews",
  async ({ currentPage = 1, kategori = "", search = "" }) => {
    const response = await api.get(
      `/news?page=${currentPage}&kategori=${kategori}&search=${
        search ? search : ""
      }`
    );
    return response.data;
  }
);

export const fetchRecentNews = createAsyncThunk(
  "videos/fetchRecentNews",
  async () => {
    const response = await api.get("/news/get/recent");
    return response.data;
  }
);

export const fetchDetailNews = createAsyncThunk(
  "videos/fetchDetailNews",
  async (id) => {
    const response = await api.get("/news/" + id);
    return response.data;
  }
);
