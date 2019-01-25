import React from 'react'

const ProjectSummary = ({projects}) => {

  return (
    <div className='card z-depth-0 project-summary'>
      <div className='card-content grey-text text-darken-3'>
      <span className="card-title ">{projects.title}</span>        <p>Posted by the Super Mario</p>
        <p className='grey-text'>24th of January, 2am</p>
      </div>
    </div>
  )
}

export default ProjectSummary
