import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './redux/store/store';


store.firebaseAuthIsReady.then(()=>{ // rendering only after firebase loged in or out
  ReactDOM.render(
    <Provider store = {store} >
      <App / >
    </Provider>,
    document.getElementById('root'));
})


serviceWorker.unregister();