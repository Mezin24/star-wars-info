import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import { favoritesReducer } from "@/features/favorites/favoritesSlice"
import { setToLocalStorage } from "@/utils/localStorage"
import { LOCAL_STORAGE_KEY } from "@/constants/store"

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

store.subscribe(() => {
  setToLocalStorage(LOCAL_STORAGE_KEY, store.getState().favorites)
})
