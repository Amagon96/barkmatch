import { useDogImage } from '../../hooks/useDogImage'
import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import { useFavsActions } from '../../hooks/useFavsActions'
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { useDogFact } from '../../hooks/useDogFact'

function DogCard () {
  const { addNewFav } = useFavsActions()
  const [error, setError] = useState<boolean>(false)
  const { imageUrl, statusMessage, statusCode, refreshDog } = useDogImage()
  const { dogFact, errorOnFact, refreshDogFact } = useDogFact()

  const handleNope = () => {
    refreshDog()
    refreshDogFact()
    console.log(`new dog retrieved with ${statusCode} and message: ${statusMessage}`)
  }

  const handleMatch = () => {
    refreshDogFact()
    addNewFav({ dogImage: imageUrl, dogDescription: dogFact })
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
      <div className='container' data-testid='dog-card-container'>
        {
          !error &&
          <>
            <img src={imageUrl} alt='a dog' data-testid='dog-image'/>
            <div className='bottom-left' data-testid='dog-desc-container'>
              <Typography variant='h6' component='h6' data-testid='dog-desc-text'>
                { errorOnFact ? 'No decription found.' : dogFact }
              </Typography>
            </div>
          </>
        }
        {
          error &&
          <h1>Something went wrong</h1>
        }
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{
            position: 'absolute',
            bottom: '-35px'
          }}
        >
          <Grid
            item
            xs={6}
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%'
            }}
          >
            <Fab color='secondary' aria-label='edit' onClick={handleNope} style={{ transform: 'scale(0.7)' }}>
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
            <Fab color='primary' aria-label='add' onClick={handleMatch} style={{ transform: 'scale(0.7)' }}>
              <FavoriteIcon />
            </Fab>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default DogCard