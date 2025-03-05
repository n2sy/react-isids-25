import React, { useRef } from 'react'
import classes from "./NewBookForm.module.css";

function BookFormV2() {
    const refTitle = useRef('');
    const refYear = useRef('');
    
    function submitHandler(e) {
        e.preventDefault();
        console.log(refTitle.current.value, refYear.current.value);
        
    }
  return (
     <form className={classes.form} onSubmit={submitHandler}>
       <div className={classes.control}>
         <label htmlFor="">Title</label>
         <input type="text" ref={refTitle}  />
       </div>
       <div className={classes.control}>
         <label htmlFor="">Image</label>
         <input type="number" ref={refYear} />
       </div>
       <div className={classes.control}>
         <label htmlFor="">Editor</label>
         <input type="number" ref={refYear} />
       </div>
       <div className={classes.control}>
         <label htmlFor="">Year</label>
         <input type="number" ref={refYear} />
       </div>
       <div className={classes.control}>
         <label htmlFor="">Author</label>
         <select name="" id="">
            <option></option>
         </select>
       </div>
       <div className={classes.actions}>
         <button type="submit">Ajouter Livre</button>
       </div>
     </form>
   );
 
}

export default BookFormV2
