import React, { useEffect, useRef, useState } from 'react'
import classes from "./NewBookForm.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookFormV2() {
    const refTitle = useRef('');
    const refYear = useRef('');
    const refImage = useRef('');
    const refSummary = useRef('');
    const refEditor = useRef('');
    const refAuthor = useRef('');
    const navigate = useNavigate();
    
    function submitHandler(e) {
        e.preventDefault();
        let newBook = {
            title : refTitle.current.value,
            editor : refEditor.current.value,
            year : refYear.current.value,
            summary : refSummary.current.value,
            image : refImage.current.value,
            author : refAuthor.current.value
        }
        fetch("http://localhost:3000/book/new", {
            method : "POST",
            body : JSON.stringify(newBook),
            headers : {
                'Content-Type' : "application/json"
            }
        }).then(res => {
            navigate("/all")
        }).catch(err => {
            alert("Erreur lors de l'ajout d'un livre...")
        })
    }
    let [listAuthors, setListAuthors] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/author/all", {
            method : "GET"
        }).then(response => {
            console.log(response.data);
            setListAuthors(response.data);      
    })},[])
    
    
  return (
     <form className={classes.form} onSubmit={submitHandler}>
       <div className={classes.control}>
         <label htmlFor="">Title</label>
         <input type="text" ref={refTitle} defaultValue=""  />
       </div>
       <div className={classes.control}>
         <label htmlFor="">Image</label>
         <input type="url" ref={refImage} />
       </div>
       <div className={classes.control}>
         <label htmlFor="">Editor</label>
         <input type="text" ref={refEditor} />
       </div>
       <div className={classes.control}>
         <label htmlFor="">Year</label>
         <input type="number" ref={refYear} />
       </div>
       <div className={classes.control}>
         <label htmlFor="">Description</label>
        <textarea cols="5" rows="4" ref={refSummary}></textarea>
       </div>
       <div className={classes.control}>
         <label htmlFor="">Author</label>
         <select ref={refAuthor}>
            
            <option value=""></option>
            {listAuthors.map(author => {
                return <option key={author.id} value={author.id}>{author.prenom} {author.nom }</option>
            })}
         </select>
       </div>
       <div className={classes.actions}>
         <button type="submit">Ajouter Livre</button>
       </div>
     </form>
   );
 
}

export default BookFormV2
