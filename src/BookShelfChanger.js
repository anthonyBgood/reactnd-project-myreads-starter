import React from 'react';

function BookShelfChanger(props){

  const {book, shelves, doChangeBookShelf} = props;
  const doClick = (shelf) => {doChangeBookShelf(book,shelf)};

  return (

    <div className="book-shelf-changer">
      <select
        onChange={(event) => doClick(event.target.value)}
        defaultValue={(book.hasOwnProperty('shelf')? book.shelf: 'none')}>
        <option
          key="move"
          value="move"
          disabled
        >Move to...
        </option>

        {shelves.map((shelf) =>
          <option
            key={shelf.id}
            value={shelf.id}
          >{shelf.name}
          </option>
        )}

        <option
          key="none"
          value="none"
        >None
        </option>

      </select>
    </div>
  );
}
export default BookShelfChanger;

// onClick={() => doClick('none')}>None