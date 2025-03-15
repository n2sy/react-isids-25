import React, { useContext } from 'react';
import './BookItem.css';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import { FavouriteContext } from '../store/FavouriteContext';

function BookItem(props) {
    const navigate = useNavigate();
    let favCtx = useContext(FavouriteContext);
    function goToDetails() {
        navigate(`/all/${props.oneBook.id}`);//, {replace : true})
        
    }
    
    function favouriteHandler() {
        if(favCtx.isFavourite(props.oneBook.id))
            favCtx.removeFavourite(props.oneBook.id);
        else
            favCtx.addFavourite(props.oneBook);
    }
  return (
      <li className='item col-md-4'>
        <Card>
        <div className="image">
        <img onClick={goToDetails}  src={props.oneBook.image}></img>
            
        </div>
        <div className="content">
            <h3>{props.oneBook.title}</h3>
            <address>{props.oneBook.year}</address>
        </div>
        <div className="actions">
            <button onClick={favouriteHandler}>
                {favCtx.isFavourite(props.oneBook.id) ? 'Remove From Favourites' : 'Add To Favourites'}
            </button>
        </div>
        </Card>
    </li>
  )
}

export default BookItem
