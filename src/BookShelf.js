import React from 'react';
import BookShow from './BookShow'

function BookShelf (props) {

    const {shelf, books, shelves, doChangeBookShelf} = props;

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {shelf.name} </h2>
        <div className="bookshelf-books">

          <ol className="books-grid">
              {books.filter((book) => book.shelf === shelf.id).map((book) => (

                <li key={book.id}>
                  <BookShow
                    book={book}
                    shelfId ={shelf.id}
                    shelves = {shelves}
                    doChangeBookShelf ={doChangeBookShelf}
                  />
                </li>
              ))}

          </ol>
        </div>
      </div>
    );
  }


export default BookShelf