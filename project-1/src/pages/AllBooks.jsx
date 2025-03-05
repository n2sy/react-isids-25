import React, { useEffect, useState } from 'react'
import BookList from '../components/BookList'

function AllBooks() {
    const [tabBooks, setTabBooks] = useState([]);
        let [isLoading, setIsLoading] = useState(true);
    
    
    useEffect(() => {
        fetch("http://localhost:3000/book/all").then(
            (res) =>  res.json()
        ).then(data => {
            setTimeout(() => {
                setIsLoading(false);
                
            },1000);
            setTabBooks(data.allBooks);
        })
        
    }, [])
    
    //console.log("Apres useEffect", tabBooks);
    
    // let MY_DATA = [
    //     {
    //       id: 1,
    //       title: "The Outsider",
    //       author: "Albert Camus",
    //       year: 1942,
    //       publisher: "Secker & Warburg",
    //       image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    //     },
    //     {
    //       id: 2,
    //       title: "To Kill a Mockingbird",
    //       author: "Harper Lee",
    //       year: 1960,
    //       publisher: "J.B. Lippincott & Co.",
    //       image: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
    //     },
    //     {
    //       id: 3,
    //       title: "The Great Gatsby",
    //       author: "F. Scott Fitzgerald",
    //       year: 1925,
    //       publisher: "Charles Scribner's Sons",
    //       image: "https://covers.openlibrary.org/b/id/7222161-L.jpg",
    //     },
    //     {
    //       id: 4,
    //       title: "100 Years of Solitude",
    //       author: "Gabriel G Marquez",
    //       year: 1967,
    //       publisher: "Harper & Row",
    //       image: "https://covers.openlibrary.org/b/id/8231991-L.jpg",
    //     },
    //     {
    //       id: 5,
    //       title: "Moby Dick",
    //       author: "Herman Melville",
    //       year: 1851,
    //       publisher: "Harper & Brothers",
    //       image: "https://covers.openlibrary.org/b/id/7222256-L.jpg",
    //     },
    //     {
    //       id: 6,
    //       title: "War and Peace",
    //       author: "Leo Tolstoy",
    //       year: 1869,
    //       publisher: "The Russian Messenger",
    //       image: "https://covers.openlibrary.org/b/id/7222261-L.jpg",
    //     },
    //   ];
    
    
    
   if(isLoading) {
    return <center><h4>Data Loading...</h4></center>
   }
   else 
  return (
   <BookList livres={tabBooks}></BookList>
    
    // <ol>
    //     <li>
            
    //     </li>
        
    // </ol>
  )
}

export default AllBooks
