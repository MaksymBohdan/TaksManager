import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {

return (
    <ul className='item project-list section '>
      {projects &&
        projects.map(project => {
          return (
            <ProjectSummary projects={project} key={project.id} id={project.id} />
          )
        })}
    </ul>
  )
}

export default ProjectList;
