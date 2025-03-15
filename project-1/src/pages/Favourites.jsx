import React, { useContext } from 'react'
import { FavouriteContext } from '../store/FavouriteContext'
import BookList from '../components/BookList';

function Favourites() {
    let favCtx = useContext(FavouriteContext);
    
  return (
    <BookList livres={favCtx.tabFavourites}></BookList>
  )
}

export default Favourites
