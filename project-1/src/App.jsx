import { Route, Routes } from "react-router"
import Accueil from "./pages/Accueil"
import AllBooks from "./pages/AllBooks"
import Favourites from "./pages/Favourites"
import Login from "./pages/Login"
import AddBook from "./pages/AddBook"
import Navbar from "./components/Navbar"

function App() {
    
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
  

  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Accueil></Accueil>}></Route>
        <Route path="/all" element={<AllBooks></AllBooks>}></Route>
        <Route path="add" element={<AddBook></AddBook>}></Route>
        <Route path="/favourites" element={<Favourites></Favourites>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        
    </Routes>
    </>
  )
}
export default App
