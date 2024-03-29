import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrayFavoris: []
};

const FavorisSlice = createSlice({
  name: 'favoris',
  initialState,
  reducers: {
    toggleFavori: (state, action) => {
      const id = state.arrayFavoris.findIndex(book => book.id === action.payload.id);
      if (id !== -1) {
        state.arrayFavoris = state.arrayFavoris.filter(book => book.id !== action.payload.id);
      } else {
        state.arrayFavoris.push(action.payload); 
      }
    },   
  },
});

export const { toggleFavori } = FavorisSlice.actions;
export default  FavorisSlice.reducer;
