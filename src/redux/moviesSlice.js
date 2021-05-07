import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: {}, loading: false, error: false };

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // fetch(state) {
    //   state.loading = true;
    //   state.error = false;
    //   state.data = {};
    // },
    setMovieId(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    // fetchFailure(state, action) {
    //   state.error = action.payload.error;
    //   state.loading = false;
    // },
  },
});

export const { setMovieId } = moviesSlice.actions;

export default moviesSlice.reducer;
