/** Import ability to create store for the app */
/** And the middleware function will create middleware for reducers and actions */
import { createStore, applyMiddleware } from 'redux'
/** Thunk middleware is used for asynchronous redux calls */
import thunkMiddleware from 'redux-thunk'
/** Allows developer to log progress of state changes */
import { createLogger } from 'redux-logger'
/** Bring in the reducers which dispatch actions */
import suiteApp from './reducers/reducers'


/** Refer to the logger to use as a console */
const loggerMiddleware = createLogger()

/** Export the function to create a store */
/** It will be created in the containers/Root file */
export default function configureStore(preloadedState) {
  return createStore(
    suiteApp,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}