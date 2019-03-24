
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

import BookShow from './BookShow';


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
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'
            >Close
          </Link>
          <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

         </div>
        </div>
        <div className="search-books-results">

          { this.booksBeenFound  || (<div> NO MATCHES</div>)}

          { this.booksBeenFound  && (<ol className="books-grid">
            {this.state.searchBooks.map((book) => (

              <li key={book.id}>
                <BookShow
                  book = {book}
                  shelves = {shelves}
                  doChangeBookShelf = {doChangeBookShelf}

                />

              </li>
            ))}
          </ol>)}

        </div>
      </div>

    );
}
}

export default SearchBooks