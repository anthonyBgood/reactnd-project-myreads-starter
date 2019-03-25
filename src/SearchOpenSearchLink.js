import React from 'react';
import {Link} from "react-router-dom";


function SearchOpenSearchLink(props){

  return (
    <div className="open-search">
      <Link
        to='/search'
        className='open-search-link'
      >Add a book</Link>
    </div>
  )
}

export default SearchOpenSearchLink;
