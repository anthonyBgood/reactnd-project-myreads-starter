import React from 'react';
import BookShelf from "./BookShelf";




function ListMyBooks(props){

  const {shelves, books, doChangeBookShelf} = props;

  return (

    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">

          {shelves.map((shelf) => (

            <div key={shelf.id} className="bookshelf">
              <BookShelf
                shelf = {shelf}
                books = {books}
                shelves = {shelves}
                doChangeBookShelf = {doChangeBookShelf}
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  )



}

export default ListMyBooks;