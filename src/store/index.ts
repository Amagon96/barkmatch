import { Middleware, configureStore } from "@reduxjs/toolkit"
import favsReducer from './favs/slice'

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem('__favorite__redux__state__', JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    favs: favsReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
