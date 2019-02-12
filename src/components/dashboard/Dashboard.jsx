import React, { Component } from 'react'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render () {
    const { projects, auth, notifications } = this.props
    
    if (!auth.uid) {
      return <Redirect to='/signin' /> // route guards to deny access in loged out
    } else {
      return (
        <div className='dashboard container'>
          <div className='row'>
            <div className='col s12 m6'>
              <ProjectList projects={projects} />
            </div>
            <div className='col s12 m5 offset-m1'>
              <Notification notifications={notifications} />
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth, 
    notifications: state.firestore.ordered.notifications,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // HOC for connecting to a single collection in firebase
    { collection: 'projects', orderBy:['createdAt','desc'] /* the order of mapping*/}, // when component is active use projects collection to put in appropriate cell in state
    {collection: 'notifications', limit: 3, orderBy:['time','desc']} // connecting to notification collection
  ])
)(Dashboard)
