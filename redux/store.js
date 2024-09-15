// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import activity from "./counters/activity";
import category from "./counters/category";
import profile from "./counters/profile";
import videos from "./counters/videos";
import news from "./counters/news";
import gallery from "./counters/gallery";
import product from "./counters/product";

export const store = configureStore({
  reducer: {
    category,
    profile,
    videos,
    news,
    activity,
    gallery,
    product,
  },
});
