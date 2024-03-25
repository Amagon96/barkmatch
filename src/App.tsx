import { Outlet } from 'react-router-dom'
import './App.css'
import SimpleBottomNavigation from './components/bottom-navigation/SimpleBottomNavigation'

export default function App () {
  return (
    <main>
      <h1>Welcome to Barkmatch</h1>
      <Outlet />
      <SimpleBottomNavigation />
    </main>
  )
}
