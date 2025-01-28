import { LocalStorageTypes, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';

import { createSlice, current } from '@reduxjs/toolkit';

const initialState: Person[] = [];

export const favoriteSlice = createSlice({
  name: LocalStorageTypes.FAVORITES,
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
      //state es el estado actual de redux, action es el nuevo estado (parecido a la funcion de actualizacion de react, nosotros guardabamos el state anterior no el nuevo)
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: Person) => p.id !== action.payload.id
      );
      setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
      return filteredState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
