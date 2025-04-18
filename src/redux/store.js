import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoriteSlice";
import playerReducer from "./playerSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    player: playerReducer,
  },
});

export default store;
