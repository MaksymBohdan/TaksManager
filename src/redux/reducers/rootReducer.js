import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore'; //syncing data from firestore
import {firebaseReducer} from 'react-redux-firebase'; // syncing firebase information including auth

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer, 
  firestore: firestoreReducer,
  firebase: firebaseReducer,
})

export default rootReducer;