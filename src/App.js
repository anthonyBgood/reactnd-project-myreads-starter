import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import SearchBooks from './SearchBooks';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {

    books: [],

    shelves: [
      {
        id:'currentlyReading',
        name: 'Currently Reading',
      },
      {
        id:'wantToRead',
        name: 'Want to Read',
      },
      {
        id:'read',
        name: 'Read',
      },
    ],

  };

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() =>({
          books
        }))
      })
  }

  render() {

    const changeBookShelf = (newShelfId, bookId) => {
        /*TODO: find a method to amend array of objects */

      // NOTE: I've changed the parameter to bookId..

      /*      const books2 = books.map((book)  => (book.title === 'The Hobbit') && (book.shelf = 'XXXXX'))
            for (book of books){
              console.log(`${book.shelf}: for:  ${book.title}`)
            }*/
    };



    return (
      <div className="app">


          <Route path='/search' render={() =>(
            <div>
              <SearchBooks
                shelves = {this.state.shelves}
                doChangeBookShelf = {changeBookShelf}

              />
            </div>
          )}/>

          <Route exact path='/' render={() =>
          (
            <div className="list-books">

              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <div className="list-books-content">
                <div>
                  {this.state.shelves.map((shelf) => (

                    <BookShelf shelf = {shelf}
                             books = {this.state.books}
                             shelves = {this.state.shelves}
                             doChangeBookShelf = {changeBookShelf}
                    />
                  ))}
                </div>
              </div>

              <div className="open-search">
                <Link
                  to='/search'
                  className='open-search-link'
                >Add a book</Link>
              </div>

            </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
