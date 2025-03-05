import { Route, Routes } from "react-router"
import Accueil from "./pages/Accueil"
import AllBooks from "./pages/AllBooks"
import Favourites from "./pages/Favourites"
import Login from "./pages/Login"
import AddBook from "./pages/AddBook"
import Navbar from "./components/Navbar"
import BookDetails from "./components/BookDetails"

function App() {
    
    
  

  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Accueil></Accueil>}></Route>
        <Route path="/all" element={<AllBooks></AllBooks>}></Route>
        <Route path="/all/:id" element={<BookDetails></BookDetails>}></Route>
        <Route path="add" element={<AddBook></AddBook>}></Route>
        <Route path="/favourites" element={<Favourites></Favourites>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        
    </Routes>
    </>
  )
}
export default App
