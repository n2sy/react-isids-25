import React, { useEffect, useRef, useState } from "react";
import classes from "./NewBookForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookFormV2({ uBook }) {
  const refTitle = useRef("");
  const refYear = useRef("");
  const refImage = useRef("");
  const refSummary = useRef("");
  const refEditor = useRef("");
  const refAuthor = useRef("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    let newBook = {
      title: refTitle.current.value,
      editor: refEditor.current.value,
      year: refYear.current.value,
      summary: refSummary.current.value,
      image: refImage.current.value,
      author: refAuthor.current.value,
    };
    if (uBook) {
      fetch(`http://localhost:3000/book/edit/${uBook.id}`, {
        method: "PUT",
        body: JSON.stringify(newBook),
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          alert("Erreur lors de la mise à jour d'un livre...");
        });
    } else {
      fetch("http://localhost:3000/book/new", {
        method: "POST",
        body: JSON.stringify(newBook),
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          navigate("/all");
        })
        .catch((err) => {
          alert("Erreur lors de l'ajout d'un livre...");
        });
    }
  }
  let [listAuthors, setListAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/author/all", {
        method: "GET",
      })
      .then((response) => {
        console.log(response.data);
        setListAuthors(response.data);
      });
  }, []);
  // console.log("Author ID", uBook.author.id);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="">Title</label>
        <input type="text" ref={refTitle} defaultValue={uBook?.title} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Image</label>
        <input type="url" ref={refImage} defaultValue={uBook?.image} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Editor</label>
        <input type="text" ref={refEditor} defaultValue={uBook?.editor} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Year</label>
        <input type="number" ref={refYear} defaultValue={uBook?.year} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Description</label>
        <textarea
          cols="5"
          rows="4"
          ref={refSummary}
          defaultValue={uBook?.summary}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="">Author</label>
        <select ref={refAuthor}>
          <option value=""></option>
          {listAuthors.map((author) => {
            return (
              <option
                key={author.id}
                value={author.id}
                selected={uBook?.author.id}
              >
                {author.prenom} {author.nom}
              </option>
            );
          })}
        </select>
      </div>
      <div className={classes.actions}>
        <button type="submit">
          {uBook ? "Editer Livre" : "Ajouter Livre"}
        </button>
      </div>
    </form>
  );
}

export default BookFormV2;
