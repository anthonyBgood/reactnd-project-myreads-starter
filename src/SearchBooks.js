
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
        this.booksBeenFound = !(books.length === undefined);
        this.mergeShelfRecords(books, this.props.books);
        this.setState(() =>({
          searchBooks: books
        }));
      })
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }));
    BooksAPI.search(query)
      .then((books) => {
        this.booksBeenFound = !(books.length === undefined);
        this.mergeShelfRecords(books, this.props.books);
        this.setState(() => ({searchBooks: books}));
    })
  };

  mergeShelfRecords = (Sbooks, myBooks) => {
    for (let sBk of  Sbooks){
      for (let bk of  myBooks){
        if(bk.id == sBk.id){
          sBk.shelf=bk.shelf;
        }
      }
    }
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