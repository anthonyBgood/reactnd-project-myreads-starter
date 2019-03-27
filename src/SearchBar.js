import React from 'react';
import {Link} from "react-router-dom";


function SearchBar(props){
  const {query, updateQuery} = props;

  return (

    <div className="search-books-bar">
      <Link
        className="close-search"
        to='/' >Close
      </Link>
      {/*      TODO: add autocomplete
                    ref: https://www.w3schools.com/howto/howto_js_autocomplete.asp
                    SEARCH_TERMS.md    */}
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
        />
      </div>
    </div>


  )
}

export default SearchBar