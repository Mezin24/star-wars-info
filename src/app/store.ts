import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import { favoritesReducer } from "@/features/favorites/favoritesSlice"

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
