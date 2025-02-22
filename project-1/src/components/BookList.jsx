import React from 'react'
import BookItem from './BookItem';
import './BookList.css';

function BookList(props) {
  return (
    <ol className='list'>
        <div className="row">
            {props.livres.map((element) => {
                return <BookItem oneBook={element}></BookItem>

})}
        </div>
    </ol>
    
  )
}

export default BookList
