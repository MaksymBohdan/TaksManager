(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{290:function(e,t,a){e.exports=a(603)},295:function(e,t,a){},573:function(e,t,a){},603:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(182),i=a.n(c),l=(a(295),a(19)),o=a(20),s=a(23),u=a(21),d=a(22),m=a(606),p=a(608),h=a(604),E=a(302),f=a(605),g=a(6),b=Object(g.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null," ",r.a.createElement(f.a,{to:"/create"},"New Project")," "),r.a.createElement("li",null," ",r.a.createElement(f.a,{to:"/signin",onClick:e.signOut},"Log Out")),r.a.createElement("li",null," ",r.a.createElement(f.a,{to:"/",className:"btn btn-floating pink lighten-1"}," ",e.profile.initials," ")," "))}),v=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null," ",r.a.createElement(f.a,{to:"/signup"},"Sign Up")," "),r.a.createElement("li",null," ",r.a.createElement(f.a,{to:"/signin"},"Login")," "))},O=Object(g.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(b,{profile:a}):r.a.createElement(v,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{to:"/",className:"brand-logo left"}," Mario Plan "),n))}),N=a(17),j=a(52),y=a.n(j),C=function(e){var t=e.notifications;return r.a.createElement("div",{className:"row"},t&&r.a.createElement("div",{className:"col s12 m4 offset-m4 "},r.a.createElement("div",{className:"card z-depth-0 notifi  "},r.a.createElement("div",{className:"card-content  "},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},e.title?r.a.createElement("div",null,r.a.createElement("span",{className:"black-text"},r.a.createElement("span",{className:"pink-text"},e.title," "),e.content," by"),r.a.createElement("span",{className:"pink-text"}," ",e.user),r.a.createElement("div",{className:"grey-text note-date"},y()(e.time.toDate()).fromNow())):r.a.createElement("div",null,r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"note-date grey-text"},y()(e.time.toDate()).fromNow())))}))))))},k=a(39),w=function(e){var t=e.project,a=e.id,n=e.index;return r.a.createElement(k.b,{draggableId:a,index:n},function(e,n){return r.a.createElement("div",Object.assign({id:a},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),r.a.createElement("div",{className:n.isDragging?"card z-depth-0 teal lighten-5 project-summary task ":"card z-depth-0 project-summary task"},r.a.createElement("div",{className:"card-content grey-text text-darken-"},r.a.createElement(E.a,{to:"/projects/"+a},r.a.createElement("span",{className:"pink-text card-title"},t.title)),r.a.createElement("p",null,"Posted by the ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},y()(t.createdAt.toDate()).calendar()))))})},S=function(e){var t=e.column,a=e.tasks,n=e.index;return r.a.createElement(k.b,{draggableId:t.id,index:n},function(e){return r.a.createElement("div",Object.assign({},e.draggableProps,{ref:e.innerRef,id:t.id,className:"col s12 toDoContainer "}),r.a.createElement("div",Object.assign({className:"card z-depth-0 column-title"},e.dragHandleProps),r.a.createElement("div",{className:"card-content "},r.a.createElement("span",{className:"card-title"},t.title))),r.a.createElement(k.c,{droppableId:t.id,type:"task"},function(e,t){return r.a.createElement("div",Object.assign({className:t.isDraggingOver?"pink lighten-1 z-depth-0 draggingContainer":"rgba(0,0,128, 0.3) draggingContainer",ref:e.innerRef},e.droppableProps),a.filter(function(e){return null!=e}).map(function(e,t){return r.a.createElement(w,{project:e,key:e.id,id:e.id,index:t})}),e.placeholder)}))})},R=a(32),x=a(8),I=a(607),P=a(186),_=a.n(P);a(529),a(533);_.a.initializeApp({apiKey:"AIzaSyAzSASxHWxj2nd3Fi9-xOoNydQzkAtrV9M",authDomain:"supermariontaskmanager.firebaseapp.com",databaseURL:"https://supermariontaskmanager.firebaseio.com",projectId:"supermariontaskmanager",storageBucket:"supermariontaskmanager.appspot.com",messagingSenderId:"75996711963"});var D=_.a,F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onDragEnd=function(e){var t=e.destination,n=e.source,r=e.draggableId,c=e.type;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var i=a.props.columns[n.droppableId],l=a.props.columns[t.droppableId];if("column"===c){var o=Array.from(a.props.columnOrder.DOVn8mVxsU59mUOqX5pf.columnOrder);return o.splice(n.index,1),o.splice(t.index,0,r),void a.createNewColumnsOrder(o)}if(i!==l){document.getElementById(r).setAttribute("class","component-hiden");var s=Array.from(i.taskIds);s.splice(n.index,1);var u=Object(N.a)({},i,{taskIds:s});a.updateTasksOrder(u);var d=Array.from(l.taskIds);d.splice(t.index,0,r);var m=Object(N.a)({},l,{taskIds:d});a.updateTasksOrder(m)}else{var p=Array.from(i.taskIds);p.splice(n.index,1),p.splice(t.index,0,r);var h=Object(N.a)({},i,{taskIds:p});a.updateTasksOrder(h)}}},a.updateTasksOrder=function(e){D.firestore().collection("columns").doc(e.id).update({taskIds:e.taskIds})},a.createNewColumnsOrder=function(e){D.firestore().collection("columnOrder").doc("DOVn8mVxsU59mUOqX5pf").update({columnOrder:e})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications,c=e.columns,i=e.columnOrder;return a.uid?r.a.createElement(k.a,{onDragEnd:this.onDragEnd},r.a.createElement(k.c,{droppableId:"all columns",direction:"horizontal",type:"column"},function(e){return r.a.createElement("div",Object.assign({className:" "},e.droppableProps,{ref:e.innerRef}),r.a.createElement("div",{className:"dashboard container column-main-area"},i&&i.DOVn8mVxsU59mUOqX5pf.columnOrder.map(function(e,a){var n=c[e],i=n.taskIds.map(function(e){return t[e]});return r.a.createElement(S,{key:n.id,column:n,tasks:i,index:a})})),e.placeholder,r.a.createElement(C,{notifications:n}))})):r.a.createElement(I.a,{to:"/signin"})}}]),t}(n.Component),A=Object(x.d)(Object(g.b)(function(e){return{projects:e.firestore.data.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,columns:e.firestore.data.columns,columnOrder:e.firestore.data.columnOrder}},null),Object(R.firestoreConnect)([{collection:"projects",orderBy:["createdAt","asc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]},{collection:"columns"},{collection:"columnOrder"}]))(F),T=a(27),U=a(120),L=function(e){var t=e.id,a=e.handleDeleteProject;return r.a.createElement(U.Modal,{actions:!1,id:"modal2"},r.a.createElement("h5",{className:"center-align"},"Are you sure you ?"),r.a.createElement("div",null,r.a.createElement("button",{className:"pink lighten-1 waves-effect waves-light btn-small left ","data-id":t,onClick:a}," Delete "),r.a.createElement("button",{className:"waves-effect waves-light btn-small right modal-close"}," Cancel ")))},z=function(e){var t=e.handleSubmit,a=e.handleEditChange,n=e.id,c=e.title,i=e.content;e.modalStatusEdit;return r.a.createElement(U.Modal,{actions:!1,id:"modal1"},r.a.createElement("form",{onSubmit:t,className:"white form-edit","data-id":n},r.a.createElement("h5",{className:"center-align"},"Please update your project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{onChange:a,type:"text",id:"title",value:c,placeholder:"update title"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{onChange:a,id:"content",className:"materialize-textarea",value:i,placeholder:"update content"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"waves-effect waves-light btn-small modal-close"},"Update"))))},J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleEditChange=function(e){a.setState(Object(T.a)({},e.target.id,e.target.value))},a.handleDeleteProject=function(e){var t=e.target.dataset.id,n=a.props.columns&&a.props.columns.find(function(e){return e.taskIds.includes(t)});a.props.columns&&console.log("currentColumn",a.props.columns);var r=n.taskIds.filter(function(e){return e!==t});D.firestore().collection("columns").doc(n.id).update({taskIds:r}).then(function(){return a.props.deleteProject(t)}),a.props.history.push("/")},a.handleSubmit=function(e){e.preventDefault();var t=e.target.dataset.id;a.props.editProject(t,a.state)},a.updateEditField=function(){a.setState({title:a.props.project.title,content:a.props.project.content})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.project,a=e.auth,n=e.id,c=this.state,i=c.title,l=c.content;return a.uid?t?r.a.createElement("div",{className:"container section project-details "},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"title-header"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("div",null,r.a.createElement("i",{onClick:this.updateEditField,className:"material-icons left modal-trigger",href:"#modal1"},"edit"),r.a.createElement("i",{className:"material-icons left modal-trigger",href:"#modal2",onClick:this.modalToggleDelete},"delete_forever "))),r.a.createElement("div",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null," ",t.authorFirstName," ",t.authorLastName," "),r.a.createElement("div",null,y()(t.createdAt.toDate()).calendar()))),r.a.createElement(L,{id:n,handleDeleteProject:this.handleDeleteProject}),r.a.createElement(z,{id:n,handleEditChange:this.handleEditChange,handleSubmit:this.handleSubmit,title:i,content:l})):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project")):r.a.createElement(I.a,{to:"/signin"})}}]),t}(n.Component),G=Object(x.d)(Object(g.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects,r=n?n[a]:null;return console.log(r),{project:r,auth:e.firebase.auth,id:a,columns:e.firestore.ordered.columns}},function(e){return{deleteProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("projects").doc(e).delete().then(function(){t({type:"DELETE_PROJECT",id:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))},editProject:function(t,a){return e(function(e,t){return function(a,n,r){r.getFirebase,(0,r.getFirestore)().collection("projects").doc(e).update(t).then(function(){a({type:"EDIT_PROJECT",id:e})}).catch(function(e){a({type:"CREATE_PROJECT_ERROR",err:e})})}}(t,a))}}}),Object(R.firestoreConnect)([{collection:"projects"},{collection:"columns"}]))(J),V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(T.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),X=Object(g.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN_SUCCESS"})}).catch(function(e){t({type:"LOGIN_ERROR",err:e})})}}(t))}}})(V),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(T.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(I.a,{to:"/signin"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up")),r.a.createElement("div",{className:"center red-text"},a?r.a.createElement("p",null,a):null)))}}]),t}(n.Component),W=Object(g.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(B),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(T.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=Object(N.a)({},a.state,{id:Date.now().toString()});D.firestore().collection("columns").doc("column-1").update({taskIds:D.firestore.FieldValue.arrayUnion(t.id)}),a.props.createProject(t),a.props.history.push("/")},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(I.a,{to:"/signin"})}}]),t}(n.Component),q=Object(g.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").doc(e.id).set(Object(N.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}})(M),H=(a(573),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:A}),r.a.createElement(h.a,{path:"/projects/:id",component:G}),r.a.createElement(h.a,{path:"/signin",component:X}),r.a.createElement(h.a,{path:"/signup",component:W}),r.a.createElement(h.a,{path:"/create",component:q}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K={authError:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("error"),Object(N.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(N.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),{state:e};case"SIGNUP_SUCCESS":return console.log("signup success"),Object(N.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(N.a)({},e,{authError:t.err.message});default:return e}},$={projects:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("created project error",t.err),e;case"DELETE_PROJECT":return console.log("deleted project",t.id),e;case"EDIT_PROJECT":return console.log("edited project",t.id),e;default:return e}},Z=a(81),ee=Object(x.c)({auth:Q,project:Y,firestore:Z.firestoreReducer,firebase:R.firebaseReducer}),te=a(289),ae=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),ne=Object(x.e)(ee,Object(x.d)(Object(x.a)(te.a.withExtraArgument({getFirestore:Z.getFirestore,getFirebase:R.getFirebase})),Object(Z.reduxFirestore)(D),Object(R.reactReduxFirebase)(D,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}),ae));ne.firebaseAuthIsReady.then(function(){i.a.render(r.a.createElement(g.a,{store:ne},r.a.createElement(H,null)),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[290,2,1]]]);
//# sourceMappingURL=main.86e719c2.chunk.js.map