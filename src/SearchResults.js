import React from 'react';
import BookShow from './BookShow';


function SearchResults(props) {

  const {booksBeenFound, searchBooks, shelves, doChangeBookShelf} = props;

  return (

    <div className="search-books-results">
      {/* show books only if the array is populated (other methods I tried to
                test this.state.searchBooks failed) */}

      { booksBeenFound  || (<div> NO MATCHES</div>)}

      { booksBeenFound  && (
        <ol className="books-grid">
          {searchBooks.map((book) => (

            <li key={book.id}>
              <BookShow
                book = {book}
                shelves = {shelves}
                doChangeBookShelf = {doChangeBookShelf}
              />
            </li>
          ))}
        </ol>)}
    </div>
  )
}


export default SearchResults;
