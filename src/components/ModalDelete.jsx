import React from 'react'

const ModalDelete = ({setShowModal, modifieIssue}) => {



    const handleClick = () => {
        setShowModal(false)
        modifieIssue(3)
    }


  return (
    <div className='modal-bg'>
    <div className='modal'>
        <p className='close-x' onClick={() => setShowModal(false)}>X</p>
        <div className='delete-popup'>
            <h2>Are you sure you want delet this todo </h2>
            <small className='modal-text'>you can't write new comment after this </small>
            <div className="button-div">
                <button className='btn-card btn-end' onClick={handleClick}>Yse</button>
                <button className='btn-card' onClick={() => setShowModal(false)}>No</button>
            </div>
        </div>
    </div>
</div>


  )
}

export default ModalDelete