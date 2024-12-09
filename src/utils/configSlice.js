import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    languageOption: "en",
  },
  reducers: {
    updateLanguageOption: (state, action) => {
      state.languageOption = action.payload;
    },
  },
});

export const { updateLanguageOption } = configSlice.actions;
export default configSlice.reducer;
