import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Droppable } from 'react-beautiful-dnd'

const ProjectList = ({ column, projectCurrent }) => {

  return (
    <div className='row dragContainer'>
      <div className='col s12 m6 toDoContainer'> {column.title}
        <Droppable droppableId={column.id}>
          {(provided) => (
            <div ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {projectCurrent  && projectCurrent.map((project, index) => <ProjectSummary project={project} key={project.id} id={project.id} index={index}/>)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div >
  )
}

export default ProjectList;

{/* <ul className='item project-list section '>
{projects &&
  projects.map(project => {
    return (
      <ProjectSummary projects={project} key={project.id} id={project.id} />
    )
  })}
</ul> */}