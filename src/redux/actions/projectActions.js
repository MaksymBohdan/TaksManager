export const createProject = (project) => {
  return(dispatch, getState, {getFirebase, getFirestore}) =>{
  //make async call to DATABASE
  const firestore = getFirestore() // adding to database before dispatch
  firestore.collection('projects').add({
    ...project,
    authorFirstName: 'Super',
    authorLastName: 'Mario',
    authorId: 12345,
    createdAt: new Date()
  }).then(()=>{
    dispatch({ type:'CREATE_PROJECT', project: project })
  }).catch((err)=>{
    dispatch({ type: 'CREATE_PROJECT_ERROR', err:err})
  })
  }
}