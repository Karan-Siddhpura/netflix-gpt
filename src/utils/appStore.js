import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice.js";
import moviesReducers from "./moviesSlice.js";
import gtpReducer from "./gptSlice.js";
import configReducer from "./configSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducers,
    gpt: gtpReducer,
    config: configReducer,
  },
});

export default appStore;
