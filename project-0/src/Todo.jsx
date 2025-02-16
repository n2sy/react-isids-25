import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({text, year}) {
    
    console.log("Entrée dans ToDo Component");
    
    let [showModal, setShowModal ] = useState(false);
    
   // let showModal = false;
    
    function deleteHandler() {
        console.log("Click sur Delete");
        // showModal = !showModal;  
        // console.log("showModal", showModal);
        setShowModal(true);
    }
    
    function closeModal() {
        setShowModal(false)
    }
    
  return (
    <>
    <div className="card">
      {/* <h2> { `${text}  ritej` } </h2> */}
      <h2> { text } </h2>
      <h2> { year } </h2>
      <div className="actions">
        <button onClick={deleteHandler} className="btn">Delete</button>
      </div>
    </div>
    { showModal ? <Modal onNidhal={closeModal}></Modal> : null }
    { showModal && <Backdrop></Backdrop>}
    </>
  );
}

export default Todo;
// function Todo(props) {
//     console.log(props);
    
//   return (
//     <div class="card">
//       <h2> { props.text } </h2>
//       <h2> { props.year } </h2>
//       <div class="actions">
//         <button class="btn">Delete</button>
//       </div>
//     </div>
//   );
// }

// export default Todo;
