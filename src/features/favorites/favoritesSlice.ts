import { createSlice } from "@reduxjs/toolkit"

interface FavoriteState {
  favorites: string
}

export const initialState: FavoriteState = {
  favorites: "Hello Redux",
}

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state) => {},
    removeFromFavorites: (state) => {},
  },
})

export const { reducer: favoritesReducer, actions: favoritesActions } =
  favoritesSlice
