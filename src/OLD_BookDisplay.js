import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

class BookDisplay extends Component {

  static propTypes = {
    book: PropTypes.array.isRequired,
    shelfId: PropTypes.string.isRequired,
    shelves: PropTypes.array.isRequired,
    doChangeBookShelf: PropTypes.func,
  };

  render(){

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128, height: 192,
            backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})`}}
          ></div>
          <BookShelfChanger
            book ={this.props.book}
            shelves = {this.props.shelves}
            handleBookShelfChange ={this.props.doChangeBookShelf}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default BookDisplay;
