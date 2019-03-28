import React from 'react';

function BookShelfChanger(props){

  const {book, shelves, doChangeBookShelf} = props;
  const doClick = (shelf) => {doChangeBookShelf(book,shelf)};

  return (

    <div className="book-shelf-changer">
      <select defaultValue={(book.hasOwnProperty('shelf')? book.shelf: 'none')}>
        <option
          key="move"
          value="move"
          disabled>Move to...
        </option>

        {shelves.map((shelf) =>
          <option
            key={shelf.id}
            value={shelf.id}
            onClick={() => doClick(shelf.id)}>{shelf.name}
          </option>
        )}

        <option
          key="none"
          value="none"
          onClick={() => doClick('none')}>None
        </option>

      </select>
    </div>
  );
}
export default BookShelfChanger;