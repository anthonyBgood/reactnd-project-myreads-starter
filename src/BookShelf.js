import React, { Component } from 'react';
//import BookDisplay from './BookDisplay';
import BookShow from './BookShow'


class BookShelf extends Component{



  render(){

    const {shelf, books, shelves} = this.props;


    return(
      <div key={shelf.id} className="bookshelf">
        <h2 className="bookshelf-title"> {shelf.name} </h2>

        <div className="bookshelf-books">
          <ol className="books-grid">

              {books.filter((book) => book.shelf === shelf.id).map((book) => (

                <li key={book.id}>
                  <BookShow
                    book={book}
                    shelfId ={shelf.id}
                    shelves = {shelves}
                    doChangeBookShelf ={this.props.doChangeBookShelf}
                  />
                </li>
              ))}

          </ol>
        </div>
      </div>

    );
  }
}


export default BookShelf