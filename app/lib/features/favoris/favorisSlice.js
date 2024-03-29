import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const favorisSlice = createSlice({
  name: 'favoris',
  initialState,
  reducers: {
    toggleFavori: (state, action) => {
      const { id } = action.payload;
      if (state[id] === undefined) {
        state[id] = true; // Agregar a favoritos si no está en la lista
      } else {
        delete state[id]; // Eliminar de favoritos si ya está en la lista
      }
    },
  },
});

export const { toggleFavori } = favorisSlice.actions;

export default favorisSlice.reducer;
