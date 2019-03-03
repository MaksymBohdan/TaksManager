import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Draggable } from 'react-beautiful-dnd'

const ProjectSummary = ({ project, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        
        <div className='card z-depth-0 project-summary ' 
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}

        >
          <div className='card-content grey-text text-darken-3'>
            <Link to={'/projects/' + id}>
              <span className='pink-text card-title'>{project.title}</span>
            </Link>
            <p>
              Posted by the {project.authorFirstName} {project.authorLastName}
            </p>
            <p className='grey-text'>{moment(project.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default ProjectSummary


// <li className='card z-depth-0 project-summary ' >
//         <div className='card-content grey-text text-darken-3'>
//           <Link to={'/projects/' + id}>
//             <span className='pink-text card-title '>{projects.title}</span>
//           </Link>
//           <p>
//             Posted by the {projects.authorFirstName} {projects.authorLastName}
//           </p>
//           {/* <p className='grey-text'>{moment(projects.createdAt.toDate()).calendar()}</p> */}
//         </div>
//       </li>