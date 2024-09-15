import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";

export const fetchCategoryProduct = createAsyncThunk(
  "product/fetchCategoryProduct",
  async () => {
    const response = await api.get("/product/category");
    return response.data;
  }
);

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async ({ currentPage = 1, kategori = "", sorting }) => {
    let sort =
      sorting && sorting.value
        ? `&sortBy=price&sortOrder=${sorting.value}`
        : "";
    const response = await api.get(
      `/product?page=${currentPage}&kategori=${kategori}${sort}`
    );
    return response.data;
  }
);

export const fetchDetailProduct = createAsyncThunk(
  "product/fetchDetailProduct",
  async (id) => {
    const response = await api.get("/product/detail/" + id);
    return response.data;
  }
);
