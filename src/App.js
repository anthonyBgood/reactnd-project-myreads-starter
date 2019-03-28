import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";

import SearchBooks from './SearchBooks';
import SearchOpenSearchLink from './SearchOpenSearchLink';
import ListMyBooks from './ListMyBooks';

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


  AddAllBooksToState(books){
    this.setState(() =>({
      books
    }))
  }

  render() {


//  amend the db with API call - runs too slow
/*   const OLD_changeBookShelf = (book, shelf) => {

      BooksAPI.update(book, shelf)
        .then(
          BooksAPI.getAll()
            .then((books) =>{
              this.AddAllBooksToState(books);
            }
            )
        )
    }*/

    // Amend makes changes to db (and existing objects in the  state array),
    // add and remove adjusts the local state variable
    const changeBookShelf = (book, shelf) => {
      amendBookShelf(book, shelf);
      (shelf === 'none'? removeBook(book): addBook(book));

    }

    //  amends the book's shelf record
    const amendBookShelf = (book, shelf) => {

      //  amend the db with API call
      BooksAPI.update(book, shelf)
        .then(

      // amend local state record
          this.setState(currentState => {
            //map provides whole array, but amends the shelf along the way
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

    // adds the new book from the API into state if it isn't already there
    const addBook = (book) => {

      const haveBook = this.state.books.filter((filterBook) => filterBook.id === book.id)
      if(haveBook.length <1) {

        // add the API version of the book object
        BooksAPI.get(book.id)
          .then((APIbook) => {
            this.setState((currentState) => ({
              books: currentState.books.concat([APIbook])
            }))
            }
          )
      }
    }

    // remove book for state - for when book's shelf has been set to shelf 'none'
    const removeBook = (book) => {
      this.setState((currentState) => ({
        books: currentState.books.filter((c) => c.id !== book.id)
      }))
    }

    return (
      <div className="app">

          <Route path='/search' render={() =>(
            <div>
              <SearchBooks
                shelves = {this.state.shelves}
                doChangeBookShelf = {changeBookShelf}
                books ={this.state.books}
              />
            </div>
          )}/>

          <Route exact path='/' render={() =>
          (
            <div>
              <ListMyBooks
              doChangeBookShelf={changeBookShelf}
              books={this.state.books}
              shelves={this.state.shelves}
              />

              <SearchOpenSearchLink />
            </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
