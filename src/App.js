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

    const changeBookShelf = (book, shelf) => {
      amendBookShelf(book, shelf);
      (shelf === 'none'? removeBook(book): addBook(book));

    }

    const amendBookShelf = (book, shelf) => {

      //  the API update call
      BooksAPI.update(book, shelf)
        .then(

          //  amend the state record of bookshelf
          this.setState(currentState => {
            const booksArray = currentState.books.map((currentBook) => {
              if (book.id === currentBook.id) {
                currentBook.shelf = shelf
              }
              return currentBook;
            });
            return {books: booksArray}
          })
        )
    };

    // adds the book to state if it isn't already there
    const addBook = (book) => {

      const haveBook = this.state.books.filter((filterBook) => filterBook.id === book.id)

      if(haveBook.length <1) {

        BooksAPI.get(book.id)
          .then((APIbook) => {
            this.setState((currentState) => ({
              books: currentState.books.concat([APIbook])
            }))
            }
          )
      }
    }

    // remove books moved to shelf 'none'
    const removeBook = (book) => {
      this.setState((currentState) => ({
        books: currentState.books.filter((c) => {
          return c.book !== book.id
        })
      }))
    }



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

                    <BookShelf
                             shelf = {shelf}
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
