// const action types
const LOAD_BOOKS = 'bookstore/books/LOAD_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// create actions for loadBooks, addBook, removeBook
export const loadBooks = () => ({ type: LOAD_BOOKS });
export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (ID) => ({ type: REMOVE_BOOK, ID });

// create reducer functions and cases to LOAD_BOOKS, ADD_BOOK, REMOVE_BOOK
export default function reducer(state = [], action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        load: true,
        books: [],
      };
    case ADD_BOOK:
      return {
        load: false,
        books: [...state.books, action.book],
      };
    case REMOVE_BOOK:
      return {
        load: false,
        books: state.books.filter((book) => book.ID !== action.ID),
      };
    default:
      return state;
  }
}
