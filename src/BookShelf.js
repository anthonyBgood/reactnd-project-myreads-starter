import React, { Component } from 'react';
import BookDisplay from './BookDisplay';


class BookShelf extends Component{




  render(){

    const {shelf, bookList, shelves} = this.props;


    return(
      <div key={shelf.id} className="bookshelf">
        <h2 className="bookshelf-title"> {shelf.name} </h2>

        <div className="bookshelf-books">
          <ol className="books-grid">

              {bookList.filter((book) => book.shelf === shelf.id).map((book) => (

                <li key={book.title}>
                  <BookDisplay
                    book={book}
                    shelfId ={shelf.id}
                    shelves = {shelves}
                    handleBookShelfChange ={this.props.handleBookShelfChange}
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