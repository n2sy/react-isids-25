import React from 'react';
import './BookItem.css';

function BookItem(props) {
  return (
    <li className='item col-md-4'>
        <div className="image">
        <img src={props.oneBook.image}></img>
            
        </div>
        <div className="content">
            <h3>{props.oneBook.title}</h3>
            <address>{props.oneBook.author}</address>
            
        </div>
        
        
        
    </li>
  )
}

export default BookItem
