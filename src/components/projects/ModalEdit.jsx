import React from 'react';
import { Modal } from 'react-materialize'


const ModalEdit = ({ handleSubmit, handleEditChange, id, title, content, modalStatusEdit }) => {

  return (
    <Modal actions={false} id="modal1">

      <form onSubmit={handleSubmit} className='white form-edit' data-id={id} >
        <h5 className='center-align'>Please update your project</h5>
        
        <div className='input-field'>
          <input onChange={handleEditChange} type='text' id='title' value={title} placeholder='update title' />
        </div>
        
        <div className='input-field'>
          <input onChange={handleEditChange} id='content' className='materialize-textarea' value={content} placeholder='update content' />
        </div>
        
        <div className='input-field'>
          <button className='waves-effect waves-light btn-small modal-close' >Update</button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalEdit;