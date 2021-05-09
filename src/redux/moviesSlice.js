import { createSlice } from "@reduxjs/toolkit";

const initialState = { catalog: [], title: "", movieId: null };

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovieId(state, action) {
      state.movieId = action.payload;
    },
    setCatalog(state, action) {
      state.catalog = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
  },
});

export const { setMovieId, setCatalog, setTitle } = moviesSlice.actions;

export default moviesSlice.reducer;
