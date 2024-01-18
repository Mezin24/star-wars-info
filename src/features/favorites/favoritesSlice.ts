import { FavoritePerson } from "./types"
import _ from "lodash"
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"

export const favoritesAdapter = createEntityAdapter()

// По умолчанию: { ids: [], entities: {} }
const initialState = favoritesAdapter.getInitialState()

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: favoritesAdapter.addOne,
    removeFromFavorites: favoritesAdapter.removeOne,
    // addToFavorites: (state, { payload }: PayloadAction<FavoritePerson>) => {
    //   favoritesAdapter.addOne(state, payload)
    // },
    // removeFromFavorites: (state, { payload }: PayloadAction<string>) => {
    //   favoritesAdapter.removeOne(state, payload)
    // },
  },
})

export const { reducer: favoritesReducer } = favoritesSlice

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
