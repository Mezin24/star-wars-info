import _ from "lodash"
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import { getFromLocalStorage } from "@/utils/localStorage"
import { LOCAL_STORAGE_KEY } from "@/constants/store"

export const favoritesAdapter = createEntityAdapter()

// По умолчанию: { ids: [], entities: {} }
const initialState = getFromLocalStorage(LOCAL_STORAGE_KEY)

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
