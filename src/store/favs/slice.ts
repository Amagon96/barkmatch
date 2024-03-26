import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Favorite, Id, FavoriteWithId } from "../../interfaces/FavoritesInterface"



const DEFAULT_STATE: FavoriteWithId[] = []

const initialState: FavoriteWithId[] = (() => {
  const persistedState = localStorage.getItem('__favorite__redux__state__')
  if (persistedState) return JSON.parse(persistedState).favs
  return DEFAULT_STATE
})()

export const favsSlice = createSlice({
  name: 'favs',
  initialState: initialState,
  reducers: {
    addNewFavorite: (state, action: PayloadAction<Favorite>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }]
    },
    deleteFavoriteById: (state, action: PayloadAction<Id>) => {
      const id = action.payload;
      return state.filter((fav) => fav.id !== id)
    }
  }
})

export default favsSlice.reducer

export const { addNewFavorite, deleteFavoriteById } = favsSlice.actions