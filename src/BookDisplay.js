import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger'

class BookDisplay extends Component {


  render(){

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128, height: 192,
            backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})`}}
          ></div>
          <BookShelfChanger
            bookId ={this.props.book.id}
            bookTitle ={this.props.book.title}
            shelfId={this.props.shelfId}
            shelves = {this.props.shelves}
            handleBookShelfChange ={this.props.handleBookShelfChange}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.author}</div>
      </div>
    );
  }
}

export default BookDisplay;
