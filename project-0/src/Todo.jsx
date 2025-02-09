import React from "react";

function Todo({text, year}) {
    
  return (
    <div class="card">
      <h2> { `${text}  ritej` } </h2>
      <h2> { year } </h2>
      <div class="actions">
        <button class="btn">Delete</button>
      </div>
    </div>
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
