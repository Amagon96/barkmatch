import './App.css'
import SimpleBottomNavigation from './components/bottom-navigation/SimpleBottomNavigation'
import DogCard from './components/profile-card/DogCard'

export default function App () {
  return (
    <main>
      <h1>Welcome to Barkmatch</h1>
      <DogCard />
      <SimpleBottomNavigation />
    </main>
  )
}
