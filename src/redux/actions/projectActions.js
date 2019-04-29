export const createProject = (project) => {
  // 2,   3,4 - distructarization from withExtraArgument
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DATABASE
    const firestore = getFirestore()
    const profile = getState().firebase.profile; // getting profile from the state
    const authorId = getState().firebase.auth.uid;

    firestore.collection('projects').doc(project.id).set({ // adding to database before dispatch
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => { // promise logic
      dispatch({ type: 'CREATE_PROJECT', project: project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err: err }) // send to reducer if error
    })
  }
}

export const deleteProject = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('projects').doc(id).delete()
      .then(() => {
        dispatch({ type: 'DELETE_PROJECT', id: id })
      }).catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err: err })
      })
  }
}


export const editProject = (id, editedProject) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').doc(id).update(editedProject)
      .then(() => {
        dispatch({ type: 'EDIT_PROJECT', id: id })
      }).catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err: err })
      })
  }
}