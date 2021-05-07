import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";

const reducer = {
  movies: moviesSlice,
};

const store = configureStore({ reducer });

export default store;
