import React, { Component } from 'react'
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../index.css';
import App from '../App';
import registerServiceWorker from '../registerServiceWorker';

/** Imports necessary for Redux */

/** Provider is used to pass the store down to every component in the app */
/** Without it, developers need to create a store in each component */
import { Provider } from 'react-redux'
/** Import the defining of the store for the app */
import configureStore from '../configureStore'
 
const store = configureStore();
 
export default class Root extends Component {
  render() {
    return (
        /** Provide the provider with the store it will render down to the app */
        /** And give the provider the app to serve the store to */
      <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </Provider>
    )
  }
}
registerServiceWorker();