import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const song = action.payload;
      const exists = state.find((track) => track.id === song.id);
      if (exists) {
        return state.filter((track) => track.id !== song.id);
      } else {
        state.push(song);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
