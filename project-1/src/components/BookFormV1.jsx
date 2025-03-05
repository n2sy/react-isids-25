import React, { useState } from "react";
import classes from "./NewBookForm.module.css";

function BookFormV1() {
    // const [title, setTitle] = useState('');
    // const [year, setYear] = useState('');
    const [formValue, setformValue] = useState({
        title : "",
        year : ""
    });
    console.log(formValue);
    
    
    function titleHandler(e) {
        
        setformValue(
           (previous) => {
                return {
                    year : previous.year,
                    title : e.target.value
                }
           }
        )
        console.log(formValue);
        
    }
    
    function yearHandler(e) {
        setformValue(
            (previous) => {
                 return {
                     title : previous.title,
                     year : e.target.year
                 }
            }
         )
         console.log(formValue);
    }
    
    function submitHandler(evenement) {
        evenement.preventDefault();
        console.log(evenement);
        
        console.log(title, year);
        
    }
    
   
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="">Title</label>
        <input type="text" onChange={titleHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Year</label>
        <input type="number" onChange={yearHandler} />
      </div>
      <div className={classes.actions}>
        <button type="submit">Ajouter Livre</button>
      </div>
    </form>
  );
}

export default BookFormV1;
