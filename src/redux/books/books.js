// import { v4 as uuidv4 } from 'uuid';

// const action types
const REQUEST_BOOKS = 'bookstore/books/REQUEST_BOOKS';
const REQUEST_BOOKS_SUCCEED = 'bookstore/books/REQUEST_BOOKS_SUCCEED';
const REQUEST_BOOKS_FAIL = 'bookstore/books/REQUEST_BOOKS_FAIL';
const REQUEST_ADD_BOOK = 'bookstore/books/REQUEST_ADD_BOOK';
const REQUEST_ADD_BOOK_SCCEED = 'bookstore/books/REQUEST_ADD_BOOK_SCCEED';
const REQUEST_ADD_BOOK_FAIL = 'bookstore/books/REQUEST_ADD_BOOK_FAIL';
const REQUEST_REMOVE_BOOK = 'bookstore/books/REQUEST_REMOVE_BOOK';
const REQUEST_REMOVE_BOOK_SUCCEED = 'bookstore/books/REQUEST_REMOVE_BOOK_SUCCEED';
const REQUEST_REMOVE_BOOK_FAIL = 'bookstore/books/REQUEST_REMOVE_BOOK_FAIL';

// create actions for loadBooks, addBook, removeBook
export const getBooks = () => ({ type: REQUEST_BOOKS });
export const setBooks = (books) => ({ type: REQUEST_BOOKS_SUCCEED, books });
export const setBooksError = (error) => ({ type: REQUEST_BOOKS_FAIL, error });
export const reqAddBook = () => ({ type: REQUEST_ADD_BOOK });
export const addBook = (book) => ({ type: REQUEST_ADD_BOOK_SCCEED, book });
export const addBookError = (error) => ({ type: REQUEST_ADD_BOOK_FAIL, error });
export const reqRemoveBook = (id) => ({ type: REQUEST_REMOVE_BOOK, id });
export const removeBook = (id) => ({ type: REQUEST_REMOVE_BOOK_SUCCEED, id });
export const removeBookError = (error) => ({ type: REQUEST_REMOVE_BOOK_FAIL, error });

// Initial state
const intialState = {
  load: false,
  error: null,
  adding: false,
  selected: null,
  books: [],
};
// create reducer functions and cases to LOAD_BOOKS, ADD_BOOK, REMOVE_BOOK
export default function reducer(state = intialState, action) {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {
        load: true,
        error: null,
        adding: false,
        selected: null,
        books: [],
      };
    case REQUEST_BOOKS_SUCCEED:
      return {
        load: false,
        error: null,
        adding: false,
        selected: null,
        books: action.books,
      };
    case REQUEST_BOOKS_FAIL:
      return {
        load: false,
        error: action.error,
        adding: false,
        selected: null,
        books: [],
      };

    case REQUEST_ADD_BOOK:
      return {
        load: false,
        error: null,
        adding: true,
        selected: null,
        books: state.books,
      };
    case REQUEST_ADD_BOOK_SCCEED:
      return {
        load: false,
        error: null,
        adding: false,
        selected: null,
        books: [...state.books, action.book],
      };
    case REQUEST_ADD_BOOK_FAIL:
      return {
        load: false,
        error: action.error,
        adding: false,
        selected: null,
        books: state.books,
      };

    case REQUEST_REMOVE_BOOK:
      return {
        load: false,
        error: null,
        adding: false,
        selected: action.id,
        books: state.books,
      };
    case REQUEST_REMOVE_BOOK_SUCCEED:
      return {
        load: false,
        error: null,
        adding: false,
        selected: null,
        books: state.books.filter((book) => book.id !== action.id),
      };
    case REQUEST_REMOVE_BOOK_FAIL:
      return {
        load: false,
        error: action.error,
        adding: false,
        selected: null,
        books: state.books,
      };
    default:
      return state;
  }
}
