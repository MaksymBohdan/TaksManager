import React from 'react'
import { Modal } from 'react-materialize'

const ModalDelete = ({ id, handleDeleteProject,  }) => {
  return (
    <Modal actions={false} id="modal2">
      <h5 className='center-align'>Are you sure you ?</h5>
      <div>
        <button className='pink lighten-1 waves-effect waves-light btn-small left ' data-id={id} onClick={handleDeleteProject}> Delete </button>
       <button className='waves-effect waves-light btn-small right modal-close'> Cancel </button> 
      </div>
    </Modal>
  )
}

export default ModalDelete
