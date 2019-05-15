
//cSpell: words Sbooks

import React, { Component } from 'react';
import * as BooksAPI from "./BooksAPI";

import SearchBar from './SearchBar';
import SearchResults from "./SearchResults";

class SearchBooks extends Component{

  state ={
    searchBooks: [],
    query:'',
  };

  booksBeenFound = false;

  setBooksBeenFound = (books) => {
    // bit to check if the .then returned a books array this isn't != undefined
    this.booksBeenFound = !((books === undefined || books.length === undefined));
    return this.booksBeenFound
  }
 

  updateSearchBooks = (books) =>{
    // bit to handle updating after .then returned
    if(this.setBooksBeenFound(books)) {
      this.mergeShelfRecords(books, this.props.books);
    }
    this.setState(() => ({searchBooks: books}));

  }

  componentDidMount(){
    BooksAPI.search()
      .then((books) => {
        this.updateSearchBooks(books)
      })
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }));
    BooksAPI.search(query)
      .then((books) => {
        this.updateSearchBooks(books)
      })
  };

  mergeShelfRecords = (Sbooks, myBooks) => {
    for (let sBk of  Sbooks){
      for (let bk of  myBooks){

        if(bk.id === sBk.id){
          sBk.shelf=bk.shelf;
        }
      }
    }
  };




  render(){

    const {shelves} = this.props;
    const query = this.state.query;

    const searchChangeBookShelf = (book,shelf) => {

      if (!(book === undefined)){
        this.props.doChangeBookShelf(book,shelf);


        // amend local state record (if not getting changed to none)
        this.setState(currentState => {
          //map provides whole array, but amends the shelf along the way
          const booksArray = currentState.searchBooks.map((currentBook) => {
            if (book.id === currentBook.id) {
              !(shelf === 'none')?
                currentBook.shelf = shelf:
                currentBook.shelf = null
            }
            return currentBook;
          });
          return {books: booksArray}
        })

      }

    };


    return(

      <div className="search-books">
        <SearchBar query={query}
                   updateQuery={this.updateQuery}/>

        <SearchResults doChangeBookShelf = {searchChangeBookShelf}
                       shelves ={shelves}
                       searchBooks={this.state.searchBooks}
                       booksBeenFound={this.booksBeenFound} />

      </div>
    );
}
}

export default SearchBooks