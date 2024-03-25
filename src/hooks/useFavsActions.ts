import { useAppDispatch } from '../hooks/store'
import { Favorite, Id } from '../interfaces/FavoritesInterface'
import { addNewFavorite, deleteFavoriteById } from '../store/favs/slice'

export const useFavsActions = () => {
  const dispatch = useAppDispatch()

  const handleAddFav = (fav: Favorite) => {
    const { dogImage, dogDescription } = fav
    dispatch(addNewFavorite({ dogImage, dogDescription }))
  }

  const handleRemoveFav = (id: Id) => {
    dispatch(deleteFavoriteById(id))
  }

  return { addNewFav: handleAddFav, removeFav: handleRemoveFav }
}