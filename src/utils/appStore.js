import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice.js";
import moviesReducers from "./moviesSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducers,
  },
});

export default appStore;
