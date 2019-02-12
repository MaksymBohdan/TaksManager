const initState ={
  projects:[]
};

const projectReducer =(state=initState, action)=>{
  switch(action.type){
    case 'CREATE_PROJECT':
     console.log('created project', action.project);
     return state; 

    case 'CREATE_PROJECT_ERROR':
    console.log('created project error', action.err);
    return state;

    case 'DELETE_PROJECT':
    console.log('deleted project', action.id);
    return state;

    case 'EDIT_PROJECT':
    console.log('edited project', action.id);
    return state;

    default:
    return state;
  }
}

export default projectReducer