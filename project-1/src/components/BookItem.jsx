import React from 'react';
import './BookItem.css';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

function BookItem(props) {
    const navigate = useNavigate();
    function goToDetails() {
        navigate(`/all/${props.oneBook.id}`);//, {replace : true})
        
    }
  return (
      <li onClick={goToDetails} className='item col-md-4'>
        <Card>
        <div className="image">
        <img src={props.oneBook.image}></img>
            
        </div>
        <div className="content">
            <h3>{props.oneBook.title}</h3>
            <address>{props.oneBook.year}</address>
        </div>
        <div className="actions">
            <button>Add To Favourites</button>
        </div>
        </Card>
    </li>
  )
}

export default BookItem
