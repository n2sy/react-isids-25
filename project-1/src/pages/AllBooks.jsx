import React from 'react'
import BookList from '../components/BookList'

function AllBooks(props) {
   
  return (
   <BookList livres={props.books}></BookList>
    
    // <ol>
    //     <li>
            
    //     </li>
        
    // </ol>
  )
}

export default AllBooks
