import { useDogImage } from "../../hooks/useDogImage"
import { useSelector } from "react-redux"
import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Fab from "@mui/material/Fab"
import Grid from '@mui/material/Grid'

function DogCard () {
  const favs = useSelector((state) => state.favs)
  const { imageUrl, statusMessage, statusCode, refreshDog } = useDogImage()

  const handleNope = () => {
    refreshDog()
    console.log(`new dog retrieved with ${statusCode} and message: ${statusMessage}`)
  }

  const handleMatch = () => {
    console.log({ favs });
    
    console.log('work in progress');
  }

  return (
    <>
      <div className="container">
        <img src={imageUrl} alt="a dog"/>
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