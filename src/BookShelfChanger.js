import React, { Component } from 'react';


class BookShelfChanger extends Component {

render () {


  const doClick = (newShelfId) => {console.log(`clicked the option ${newShelfId}`)};

  return (

//{shelfId  === shelf.id && ( selected )}
  <div className="book-shelf-changer">
    <select>

      <option key="move" value="move" disabled>Move to...</option>

      {this.props.shelves.map((shelf) =>
        <option key={shelf.id} value={shelf.id} onClick={() => doClick(shelf.id)}>{shelf.name}</option>
      )}
      <option key="none" value="none" onClick={() => doClick('none')}>None</option>



{/*      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read" selected >Read</option>
      <option value="none">None</option>*/}
    </select>
  </div>
);
}
}

export default BookShelfChanger;