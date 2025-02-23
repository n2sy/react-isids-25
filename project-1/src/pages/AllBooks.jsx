import React, { useEffect, useState } from 'react'
import BookList from '../components/BookList'

function AllBooks() {
    const [tabBooks, setTabBooks] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/book/all").then(
            (res) =>  res.json()
        ).then(data => {
            console.log(data);
            
            setTabBooks(data.allBooks);
        })
        
    }, [])
    
    
   
  return (
   <BookList livres={tabBooks}></BookList>
    
    // <ol>
    //     <li>
            
    //     </li>
        
    // </ol>
  )
}

export default AllBooks
