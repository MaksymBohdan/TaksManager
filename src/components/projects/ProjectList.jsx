import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Droppable, Draggable } from 'react-beautiful-dnd'

const ProjectList = ({ column, tasks, index }) => {

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef} className='col s12 toDoContainer  ' >
          <div className='card z-depth-0 column-title' {...provided.dragHandleProps}>
            <div className='card-content '>
              <span className='card-title' >{column.title}</span>
                 </div>
          </div>
              <Droppable droppableId={column.id} type="task">
                {(provided, snapshot) => (
                  <div className={snapshot.isDraggingOver ? 'pink lighten-1 z-depth-0 draggingContainer' : 'rgba(0,0,128, 0.3) draggingContainer'}
                    ref={provided.innerRef} {...provided.droppableProps}>

                    {tasks.filter(el => el != null).map((project, index) => <ProjectSummary project={project} key={project.id} id={project.id} index={index} />)}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
         
        </div>
      )}
    </Draggable>
  )
}

export default ProjectList;
