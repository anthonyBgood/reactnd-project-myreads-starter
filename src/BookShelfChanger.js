import React, { Component } from 'react';


class BookShelfChanger extends Component {

render () {


/*  const doClick = (newShelfId) => {console.log(`clicked the option ${newShelfId}
  for book ${this.props.bookTitle}`)};*/

  const bookId = this.props.bookId;
  const doClick = (newShelfId) => {this.props.handleBookShelfChange(
    {newShelfId}, {bookId})};

  return (

//{shelfId  === shelf.id && ( selected )}
  <div className="book-shelf-changer">
    <select>

      <option key="move" value="move" disabled>Move to...</option>

      {this.props.shelves.map((shelf) =>
        <option key={shelf.id} value={shelf.id} onClick={() => doClick(shelf.id)}>{shelf.name}</option>
      )}
      <option key="none" value="none" onClick={() => doClick('none')}>None</option>

    </select>
  </div>
);
}}

export default BookShelfChanger;