import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/bottom-navigation/NavigationBar'
import { Typography } from '@mui/material'

export default function App () {
  return (
    <>
      <main>
        <Typography variant="h6" component="h6">
          Welcome to Barkmatch
        </Typography>
        <Outlet />
        <NavigationBar />
      </main>
    </>
  )
}
