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
  state = {
    projects: null,
    columns: null,
    columnOrder: null,
  }

  componentDidMount() {
    firebase.firestore().collection('projects').get()
      .then(docs => {
        const projectsFb = {};
        docs.forEach(doc => projectsFb[doc.data().id] = doc.data())
        this.setState({
          projects: projectsFb
        })
      });

    firebase.firestore().collection('columns').get()
      .then(docs => {
        const columnsFb = {};
        docs.forEach(doc => columnsFb[doc.data().id] = doc.data())
        this.setState({
          columns: columnsFb
        })
      })

    firebase.firestore().collection('columnOrder').doc('DOVn8mVxsU59mUOqX5pf').get()
      .then(docs => {
        this.setState({
          columnOrder: docs.data()
        })

      })
  }


  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    //moving of columns
    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder.columnOrder)
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      this.setState({
        columnOrder: { columnOrder: newColumnOrder }
      },
        () => this.createNewColumnsOrder(newColumnOrder))
      return
    }

    // moving inside the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds) // to avoid mutating of existing state
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = { // to update firebase
        ...start,
        taskIds: newTaskIds
      }

      const newColumns = { // to update state
        ...this.state.columns,
        [newColumn.id]: newColumn
      }

      this.setState({
        columns: newColumns
      }, () => this.updateTasksOrder(newColumn)) //update column's order

      return;
    }
    //moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = { ...start, taskIds: startTaskIds };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = { ...finish, taskIds: finishTaskIds }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }

    this.setState(newState, () => {
      this.updateTasksOrder(newStart)
      this.updateTasksOrder(newFinish)
    })
  }

  updateTasksOrder = (column) => {
    firebase.firestore().collection('columns').doc(column.id).update({
      taskIds: column.taskIds,
    })
  }

  createNewColumnsOrder = (column) => {
    firebase.firestore().collection('columnOrder').doc('DOVn8mVxsU59mUOqX5pf').update({
      columnOrder: column
    })
  }

  render() {
    const { auth, notifications } = this.props
    const { columns, columnOrder, projects } = this.state
    if (!auth.uid) {
      return <Redirect to='/signin' /> // route guards to deny access in loged out
    } else {

      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId='all columns' direction='horizontal' type='column'>
            {provided => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <div className='dashboard container column-main-area'>
                  {columnOrder && columnOrder.columnOrder.map((columnId, index) => {
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
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }, // connecting to notification collection
  ])
)(Dashboard)


