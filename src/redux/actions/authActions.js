export const signIn = (credentials /*email and passord*/ ) => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase(); //firebase init

    firebase.auth().signInWithEmailAndPassword( // initializing firebase auth
      credentials.email,
      credentials.password,
    ).then(() => {
      dispatch({
        type: 'LOGIN_SUCCESS'
      });
    }).catch((err) => {
      dispatch({
        type: 'LOGIN_ERROR',
        err
      });
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase();

    firebase.auth().signOut() // method for signout
      .then(() => {
        dispatch({
          type: 'SIGNOUT_SUCCESS'
        })
      });
  }
}

export const signUp = (newUser) => {

  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword( // creating a new user 
      newUser.email, 
      newUser.password
      ).then(resp => {
        return firestore.collection('users') //creating a new collection
        .doc(resp.user.uid) // creating a new doc with id and storing properties there
        .set({ //setting properties
          firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }
}