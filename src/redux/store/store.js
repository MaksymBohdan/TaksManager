import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore' // provides redux bindings for firestore in particular
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase' // provides an ability binding to firebase servise
import fbConfig from '../../config/fbConfig'

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducer,
  compose(
    // to combine multiply store enhansers
    applyMiddleware(
      thunk.withExtraArgument({
        getFirestore,
        getFirebase
      })
    ),
    reduxFirestore(fbConfig), // both store enhansers to know which projects to connect to after action called
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      /* use firestore to get profile obj to state */
      userProfile: 'users' /* which profile to use */,
      attachAuthIsReady: true, /* confiq option */
    }),
    DevTools
  )
)

export default store
