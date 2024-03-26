import { useAppSelector } from "../../hooks/store"
import { FavoriteDogs } from "../../interfaces/FavoritesInterface";

export function Favorites () {
  const favorites = useAppSelector((state) => state.favs)
  const hasFavorites = favorites.length > 0

  return (
    hasFavorites ? 
      <ListOfFavorites favorites={favorites} /> :
      <NoResults />
  )
}

const ListOfFavorites = ({ favorites }: FavoriteDogs) => {
  return (
    <ul className='favorites'>
            {
              favorites.map(fav => (
                  <li className='favorite' key={fav.id}>
                      <h3>{fav.dogDescription}</h3>
                      <img src={fav.dogImage} alt='Favorite Dog'/>
                  </li>
              ))
            }
        </ul>
  )
}

const NoResults = () => {
  return (
      <h3>No dogies were found 😪 </h3>
  )
}