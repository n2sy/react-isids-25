import React from 'react'

function Modal(props) {
    
    function cancelHandler() {
        console.log("Click sur Cancel");
        props.onNidhal();
        
    }
    
    function confirmHandler() {
        console.log("Click sur Confirm");
        props.onNidhal();
        
    }
  return (
    <div className="modal">
        <p>Are you sure?</p>
        <button onClick={cancelHandler} className="btn btn--alt">Cancel</button>
        <button onClick={confirmHandler} className="btn">Confirm</button>
    </div>
  )
}

export default Modal



