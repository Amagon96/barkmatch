import { useDogImage } from "../../hooks/useDogImage"
import { useSelector } from "react-redux"
import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Fab from "@mui/material/Fab"
import Grid from '@mui/material/Grid'
import { useAppSelector } from "../../hooks/store"
import { useFavsActions } from "../../hooks/useFavsActions"
import { useEffect, useState } from "react"
import { Typography } from "@mui/material"

function DogCard () {
  const favs = useAppSelector((state) => state.favs)
  const { addNewFav } = useFavsActions()
  const [error, setError] = useState<boolean>(false)
  const { imageUrl, statusMessage, statusCode, refreshDog } = useDogImage()

  const handleNope = () => {
    refreshDog()
    console.log(`new dog retrieved with ${statusCode} and message: ${statusMessage}`)
  }

  const handleMatch = () => {
    addNewFav({ dogImage: imageUrl, dogDescription: 'hello world' })
    setError
    refreshDog()
  }

  useEffect(() => {
    if (statusCode === 200 && statusMessage === 'success') {
      setError(false)
    } else {
      setError(true)
    }
  }, [statusCode])

  return (
    <>
      <div className="container">
        {
          !error &&
          <>
            <img src={imageUrl} alt="a dog"/>
            <div className="bottom-left">
              <Typography variant="h5" component="h5">
                Dog description
              </Typography>
            </div>
          </>
        }
        {
          error &&
          <h1>Something went wrong</h1>
        }
      </div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={6}
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center' 
          }}
        >
          <Fab color="secondary" aria-label="edit" onClick={handleNope}>
            <CloseIcon />
          </Fab>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center' 
          }}
        >
          <Fab color="primary" aria-label="add" onClick={handleMatch}>
            <FavoriteIcon />
          </Fab>
        </Grid>
      </Grid>
    </>
  )
}

export default DogCard