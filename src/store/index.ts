import { Action, Dispatch, Middleware, MiddlewareAPI, configureStore, UnknownAction } from "@reduxjs/toolkit"
import favsReducer from './favs/slice'

// const persistanceLocalStorageMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch<UnknownAction>) => (action: UnknownAction) => {
//   next(action);
//   localStorage.setItem('__favorite__redux__state__', JSON.stringify(store.getState()));
// };

export const store = configureStore({
  reducer: {
    favs: favsReducer
  }
})