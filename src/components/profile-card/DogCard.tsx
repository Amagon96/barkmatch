import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDogImage } from "../../hooks/useDogImage"
import Fab from "@mui/material/Fab"
import Grid from '@mui/material/Grid'

function DogCard () {
  const { imageUrl, status, refreshDog } = useDogImage()

  const handleNope = () => {
    refreshDog()
    console.log(`new dog retrieved with ${status}`)
  }

  const handleMatch = () => {
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
      {/* <button 
        onClick={handleClick}
        style={{ marginTop: '5px' }}
      >
          New Dog
      </button> */}
    </>
  )
}

export default DogCard