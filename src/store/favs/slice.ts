import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Favorite, FavoriteId, FavoriteWithId } from "../../interfaces/FavoritesInterface"



const DEFAULT_STATE: FavoriteWithId[] = []

export const favsSlice = createSlice({
  name: 'favs',
  initialState: DEFAULT_STATE,
  reducers: {
    addNewFavorite: (state, action: PayloadAction<Favorite>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }]
    },
    deleteFavoriteById: (state, action: PayloadAction<FavoriteId>) => {
      const id = action.payload;
      return state.filter((fav) => fav.id !== id)
    }
  }
})

export default favsSlice.reducer

export const { addNewFavorite, deleteFavoriteById } = favsSlice.actions