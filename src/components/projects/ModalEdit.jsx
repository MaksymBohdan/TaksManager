import React from 'react';
import { Modal } from 'react-materialize'


const ModalEdit = ({ handleSubmit, handleEditChange, id, title, content, modalStatus }) => {

  return (
    <Modal actions={false} open={modalStatus}>
      <p className='center-align'>Please update your project</p>
      <form onSubmit={handleSubmit} className='white' data-id={id} >
        <div className='input-field'>
          <input onChange={handleEditChange} type='text' id='title' value={title} placeholder='update title'/>
        </div>
        <div className='input-field'>
          <textarea onChange={handleEditChange} id='content' className='materialize-textarea' value={content} placeholder='update content' />
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0' >Create</button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalEdit;