
import React, { Component } from 'react';
import * as BooksAPI from "./BooksAPI";

import SearchBar from './SearchBar';
import SearchResults from "./SearchResults";

class SearchBooks extends Component{

  state ={
    searchBooks: [],
    query:'',
  };

  booksBeenFound= false;

  componentDidMount(){
    BooksAPI.search('Android')
      .then((books) => {
        this.booksBeenFound = !!(books.length);
        this.setState(() =>({
          searchBooks: books
        }))
      })
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }));
    BooksAPI.search(query)
      .then((books) => {
        console.log('books length is: ' + books.length);
        this.booksBeenFound = !!(books.length);
        this.setState(() => ({searchBooks: books}))
    })
  };


  render(){

    const {shelves, doChangeBookShelf} = this.props;
    const query = this.state.query;

    return(

      <div className="search-books">
        <SearchBar query={query}
                   updateQuery={this.updateQuery}/>

        <SearchResults doChangeBookShelf = {doChangeBookShelf }
                       shelves ={shelves}
                       searchBooks={this.state.searchBooks}
                       booksBeenFound={this.booksBeenFound} />

      </div>
    );
}
}

export default SearchBooks