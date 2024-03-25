import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import PetsIcon from '@mui/icons-material/Pets'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Paper from '@mui/material/Paper'
import { useLocation, Link, useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation () {
  const navigate = useNavigate()

  return (
    <Box sx={{ width: 500 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={useLocation().pathname}
        >
          <BottomNavigationAction
            component={Link}
            to='/favs'
            value='/favs'
            onClick={() => navigate('/favs')}
            label="Favorites"
            icon={
              <FavoriteIcon />
            }
          />
          <BottomNavigationAction
            component={Link}
            to='/dogs'
            value='/dogs'
            onClick={() => navigate('/dogs')}
            label="Home"
            icon={
              <PetsIcon />
            }
          />
          <BottomNavigationAction
            component={Link}
            to='/else'
            value='/else'
            onClick={() => navigate('/')}
            label="Archive"
            icon={
              <LocationOnIcon />
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}
