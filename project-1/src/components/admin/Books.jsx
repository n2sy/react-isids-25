import axios from "axios";
import React, { useEffect, useState } from "react";
import BookItemTable from "./BookItemTable";
import Modal from "./Modal";
import BookFormV2 from "../BookFormV2";

function Books() {
  const [listBooks, setListBooks] = useState([]);
  const [show, setShow] = useState(false);
  const [refreshBook, setRefreshBook] = useState(null);

  console.log("Show Value", show);

  useEffect(() => {
    let myToken = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/book/all", {
        headers: {
          Authorization: `bearer ${myToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setListBooks(res.data);
      });
  }, []);
  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Books</h2>
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            Add Book
          </button>
        </div>
        <Modal
          show={show}
          closeModal={setShow}
          uBook={refreshBook}
          setRefreshBook={setRefreshBook}
        >
          <BookFormV2 uBook={refreshBook}></BookFormV2>
        </Modal>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Editor</th>
              <th>Year</th>
              <th>Author</th>
              <th>Image</th>
              <th>Summary</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listBooks.map((b) => {
              return (
                <BookItemTable
                  updateShow={setShow}
                  key={b.id}
                  selectedBook={b}
                  setRefreshBook={setRefreshBook}
                ></BookItemTable>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Books;
