import { Pencil, Scissors } from "lucide-react";
import React from "react";

function BookItemTable({ selectedBook, updateShow, setRefreshBook }) {
  return (
    <tr>
      <td>{selectedBook.id} </td>
      <td> {selectedBook.title} </td>
      <td> {selectedBook.editor}</td>
      <td>{selectedBook.year}</td>
      <td>{`${selectedBook.author.prenom} ${selectedBook.author.nom}`}</td>
      <td>{selectedBook.image}</td>
      <td>{selectedBook.summary.substring(0, 30) + "..."}</td>
      <td>
        <button className="btn">
          <Scissors></Scissors>
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            updateShow(true);
            setRefreshBook(selectedBook);
          }}
          className="btn"
        >
          <Pencil></Pencil>
        </button>
      </td>
    </tr>
  );
}

export default BookItemTable;
