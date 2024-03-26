import { Outlet } from 'react-router-dom'
import './App.css'
import SimpleBottomNavigation from './components/bottom-navigation/SimpleBottomNavigation'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export default function App () {
  return (
    <>
      <main>
        <Typography variant="h6" component="h6">
          Welcome to Barkmatch
        </Typography>
        <Outlet />
        <SimpleBottomNavigation />
      </main>
    </>
  )
}
