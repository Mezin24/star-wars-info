import { favoritesAdapter } from "./favoritesSlice"
import { RootState } from "@/app/store"

export const favoritesSelectors = favoritesAdapter.getSelectors(
  (state: RootState) => state.favorites,
)
