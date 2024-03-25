import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { store } from './store'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SimpleBottomNavigation from './components/bottom-navigation/SimpleBottomNavigation.tsx'
import DogCard from './components/profile-card/DogCard.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <DogCard /> },
      {
        path: "dogs",
        element: <DogCard />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
