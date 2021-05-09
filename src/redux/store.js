import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const reducer = combineReducers({
  movies: moviesSlice,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
});

export default store;
