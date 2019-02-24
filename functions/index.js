/* firebase deploy --only functions  */

const functions = require('firebase-functions');
const admin = require('firebase-admin'); // admin to interact with firebase data
 admin.initializeApp(functions.config().firebase);// app initialization (will be able to use admin for interaction woth firebase /firestore)


                  
exports.helloWorld = functions.https.onRequest((request, response) => {  
  //simple cloud function to Firebase.
 response.send("Hello from Super Mario"); 
});

const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')// creating of a new collection 
  .add(notification)
  .then(doc => console.log('notification added', doc));
})


exports.projectCreated = functions.firestore
 .document('projects/{projectId}') // setting a triger for onCreate function
 .onCreate(doc => { // takes doc which was created and applying code below
  const project = doc.data();
  const notification = {
    title:`${project.title}`,
    content: 'project has been added',
    user: `${project.authorFirstName} ${project.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp() //creating timestamp
    }
    return createNotification(notification);
  }
)
exports.projectDeleted = functions.firestore
  .document('projects/{projectId}')
  .onDelete(doc => {
    const project = doc.data();
    const notification = {
      title: `${project.title}`,
      content: `project has been deleted`,
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp() //creating timestamp
    }
    return createNotification(notification);
  })

  exports.projectEdited = functions.firestore
    .document('projects/{projectId}')
    .onUpdate((change, context)  =>{
      const newValue = change.after.data(); // updated obj
    const notification = {
      title: `${newValue.title}`,
      content: `project has been updated`,
      user: `${newValue.authorFirstName} ${newValue.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp() //creating timestamp
    }
    return createNotification(notification);
    })

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    return admin.firestore().collection('users')
    .doc(user.uid)// receiving data from a document
    .get().then(doc => {
        //accessing a data from the document
        const newUser = doc.data();
        const notification = {
          content: 'joined the App',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()//creating timestamp
        };
        return createNotification(notification);

      });
});

