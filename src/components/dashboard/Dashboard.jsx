import React, { Component } from 'react'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { DragDropContext } from 'react-beautiful-dnd'
import {updateColumnAfterDnD} from '../../redux/actions/projectActions'


class Dashboard extends Component {


  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;


    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const column = this.props.columns.find(el => el.id === source.droppableId)
    // console.log('column', column);
    const newProjectIds = [...column.taskIds];

    console.log(newProjectIds);
    newProjectIds.splice(source.index, 1);
    console.log(newProjectIds);
    newProjectIds.splice(destination.index, 0, draggableId);
    console.log(newProjectIds);

    const newColumn ={
      ...column,
      taskIds:newProjectIds,
    }

    this.props.updateColumnAfterDnD(newColumn);

  }

  render() {
    const { projects, auth, notifications, columns, columnOrder } = this.props

    if (!auth.uid) {
      return <Redirect to='/signin' /> // route guards to deny access in loged out
    } else {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className='dashboard container '>
            {projects && columns && columnOrder && columnOrder[0].columnOrder.map((columnId, inx) => {
              const column = columns[inx];
              const projectCurrent = column.taskIds.map((taskId, indx) => projects[indx])
              return <ProjectList key={column.id} column={column} projectCurrent={projectCurrent} />
            })}
          </div>
        </DragDropContext>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects || null,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    columns: state.firestore.ordered.columns,
    columnOrder: state.firestore.ordered.columnOrder,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    updateColumnAfterDnD: (column) =>
    dispatch(updateColumnAfterDnD(column))
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    // HOC for connecting to a single collection in firebase
    { collection: 'projects', /* orderBy: ['createdAt', 'asc'] the order of mapping */ }, // when component is active use projects collection to put in appropriate cell in state
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }, // connecting to notification collection
    { collection: 'columns' },
    { collection: 'columnOrder' },
  ])
)(Dashboard)
