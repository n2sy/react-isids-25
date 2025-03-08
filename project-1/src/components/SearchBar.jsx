import axios from "axios";
import React, { useRef, useState } from "react";

function SearchBar({filterBook}) {
  let startyearRef = useRef("");
  let endyearRef = useRef("");

  function searchHandler() {


    axios.get("http://localhost:3000/book/filter", {
      params: {
        startyear: startyearRef.current.value,
        endyear: endyearRef.current.value,
      },
    }).then(res => {
        console.log(res.data);
        filterBook(res.data)
        
    }).catch(err => {
        console.log(err);
        
    })
  }
  return (
    <div>
      <table className="table table-striped">
        <tbody>
        <tr>
          <td>Start Year</td>
          <td>
            <input type="number" className="form-control" ref={startyearRef} />
          </td>
          <td>End Year</td>
          <td>
            <input type="number" className="form-control" ref={endyearRef} />
          </td>
          <td>
            <button onClick={searchHandler} className="btn">
              Search
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SearchBar;
