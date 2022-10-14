import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./posts/postSlice";

const store = configureStore({
  reducer: {
    posts: postSlice
  }
})

export default store;