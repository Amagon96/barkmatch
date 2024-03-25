import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Paper from '@mui/material/Paper'
import { ChangeEvent, useState } from 'react'

export default function SimpleBottomNavigation () {
  const [value, setValue] = useState<number>(0)

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    event.preventDefault()
    setValue(newValue)
  }

  return (
    <Box sx={{ width: 500 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}
