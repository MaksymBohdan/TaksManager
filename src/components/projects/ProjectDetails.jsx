import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteProject, editProject } from '../../redux/actions/projectActions'
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit';
import firebase from '../../config/fbConfig'

class ProjectDetails extends Component {
  state = {
    title: '',
    content: '',
  }

  handleEditChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleDeleteProject = e => {
    const id = e.target.dataset.id

    const currentColumn = this.props.columns && this.props.columns.find(el => el.taskIds.includes(id))
    this.props.columns &&  console.log('currentColumn', this.props.columns );
    const updatedColumnIds = currentColumn.taskIds.filter(el => el !== id);

    firebase.firestore().collection('columns').doc(currentColumn.id).update({
      taskIds: updatedColumnIds
    }).then(() => this.props.deleteProject(id));

    this.props.history.push('/')
  }

  handleSubmit = e => {
    e.preventDefault()
    const id = e.target.dataset.id
    this.props.editProject(id, this.state)
  }

  updateEditField = () => {
    this.setState({
      title: this.props.project.title,
      content: this.props.project.content,
    })

  }

  render() {
    const { project, auth, id } = this.props
    const { title, content} = this.state

    if (!auth.uid) return <Redirect to='/signin' /> // route guards to deny access in loged out

    if (project) {
      return (
        <div className='container section project-details '>
          <div className='card z-depth-0'>
            <div className='card-content'>
              <div className="title-header">
                <span className='card-title'>{project.title}</span>
                <div>
                  <i onClick={this.updateEditField} className='material-icons left modal-trigger' href="#modal1" >edit</i>
                  <i className='material-icons left modal-trigger' href="#modal2" onClick={this.modalToggleDelete}>delete_forever </i>
                </div>
              </div>

              <div>{project.content}</div>
            </div>
            <div className='card-action grey lighten-4 grey-text'>
              <div> {project.authorFirstName} {project.authorLastName} </div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
          <ModalDelete id={id}
            handleDeleteProject={this.handleDeleteProject} />
          <ModalEdit id={id}
            handleEditChange={this.handleEditChange}
            handleSubmit={this.handleSubmit}
            title={title}
            content={content}
             />
        </div>
      )
    } else {
      return (
        <div className='container center'>
          <p>Loading project</p>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id // PROPS OF THE COMPONENT (SECOND PARAMETER)
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  console.log(project)
  return {
    project: project,
    auth: state.firebase.auth,
    id: id,
    columns: state.firestore.ordered.columns,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: id => dispatch(deleteProject(id)),
    editProject: (id, editedProject) => dispatch(editProject(id, editedProject))
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
  { collection: 'projects'},
  { collection: 'columns' },
])
)(ProjectDetails)
