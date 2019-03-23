import React, { Component } from 'react'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import firebase from '../../config/fbConfig'


class Dashboard extends Component {

  onDragEnd = (result) => {

    const { destination, source, draggableId, type } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;


    const start = this.props.columns[source.droppableId];
    const finish = this.props.columns[destination.droppableId];


    //moving of columns
    if (type === 'column') {
      
      const newColumnOrder = Array.from(this.props.columnOrder.DOVn8mVxsU59mUOqX5pf.columnOrder)
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      this.createNewColumnsOrder(newColumnOrder)
      return
    }

    // moving inside the same column
    if (start === finish) {
     
      const newTaskIds = Array.from(start.taskIds) // to avoid mutating of existing state
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }
      this.updateTasksOrder(newColumn); //update column's order
      return;
    }
    //moving from one list to another
    document.getElementById(draggableId).setAttribute('class', 'component-hiden');

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = { ...start, taskIds: startTaskIds };
    this.updateTasksOrder(newStart)


    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = { ...finish, taskIds: finishTaskIds }
    this.updateTasksOrder(newFinish)

  }

  updateTasksOrder = (column) => {
    firebase.firestore().collection('columns').doc(column.id).update({
      taskIds: column.taskIds,
    }
    )
  }

  createNewColumnsOrder = (column, ) => {
    firebase.firestore().collection('columnOrder').doc('DOVn8mVxsU59mUOqX5pf').update({
      columnOrder: column
    })
  }

  render() {
    const { projects, auth, notifications, columns, columnOrder } = this.props

    if (!auth.uid) {
      return <Redirect to='/signin' /> // route guards to deny access in loged out
    } else {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId='all columns' direction='horizontal' type='column'>
            {provided => (
              <div
                className=" "
                {...provided.droppableProps}
                ref={provided.innerRef}
              >

                <div className='dashboard container column-main-area'>
                  {columnOrder && columnOrder.DOVn8mVxsU59mUOqX5pf.columnOrder.map((columnId, index) => {
                    const column = columns[columnId];
                    const tasks = column.taskIds.map(taskId => projects[taskId])
                    return <ProjectList key={column.id} column={column} tasks={tasks} index={index} />
                  })
                  }
                </div>
                {provided.placeholder}
                <Notification notifications={notifications} />
              </div>
            )}
          </Droppable>

        </DragDropContext>
      )
    }

  }

}

const mapStateToProps = state => {
  return {
    projects: state.firestore.data.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    columns: state.firestore.data.columns,
    columnOrder: state.firestore.data.columnOrder,
  }
}



export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([
    // HOC for connecting to a single collection in firebase
    { collection: 'projects', orderBy: ['createdAt', 'asc'] /* the order of mapping */ }, // when component is active use projects collection to put in appropriate cell in state
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }, // connecting to notification collection
    { collection: 'columns' },
    { collection: 'columnOrder' },
  ])
)(Dashboard)


