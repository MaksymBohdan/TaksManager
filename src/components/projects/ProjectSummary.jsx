import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'


const ProjectSummary = ({ projects, id }) => {
  return (
      <li className='card z-depth-0 project-summary ' >
        <div className='card-content grey-text text-darken-3'>
          <Link to={'/projects/' + id}>
            <span className='pink-text card-title '>{projects.title}</span>
          </Link>
          <p>
            Posted by the {projects.authorFirstName} {projects.authorLastName}
          </p>
          <p className='grey-text'>{moment(projects.createdAt.toDate()).calendar()}</p>
        </div>
      </li>
  )
}

export default ProjectSummary
