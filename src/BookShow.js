import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger'


class BookShow extends Component{


  render(){
    const {book,shelves, doChangeBookShelf} = this.props;
    return (

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
          width: 128, height: 192,
            backgroundImage: (book.hasOwnProperty('imageLinks')) && `url(${book.imageLinks.thumbnail})`}}  //book.imageLinks.smallThumbnail
          ></div>

            <BookShelfChanger
              book={book}
              shelves={shelves}
              doChangeBookShelf={doChangeBookShelf}
            />

        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}


export default BookShow;
