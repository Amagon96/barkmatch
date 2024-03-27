import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { store } from './store'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DogCard from './components/profile-card/DogCard.tsx'
import { Favorites } from './components/favorites/Favorites.tsx'
import About from './components/about-me/AboutMe.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <DogCard /> },
      {
        path: 'dogs',
        element: <DogCard />,
      },
      {
        path: 'favs',
        element: <Favorites />,
      },
      {
        path: 'about',
        element: <About />
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
