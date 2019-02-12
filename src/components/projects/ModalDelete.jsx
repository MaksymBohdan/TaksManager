import React from 'react'
import { Modal } from 'react-materialize'

const ModalDelete = ({ id, handleDeleteProject }) => {
  return (
    <Modal actions={false} trigger={<i className='material-icons left'>delete_forever </i>} >
      <p className='center-align'>Are you sure you ?</p>
      <div>
        <a className='pink lighten-1 waves-effect waves-light btn-small' data-id={id} onClick={handleDeleteProject} > <i className='material-icons left'>check</i>Delete </a>
        <a className='waves-effect waves-light btn-small modal-close'> <i className='material-icons right'>close</i>Cancel </a>
      </div>
    </Modal>
  )
}

export default ModalDelete
