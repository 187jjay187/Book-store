import { v4 as uuidv4 } from 'uuid';

// const action types
const LOAD_BOOKS = 'bookstore/books/LOAD_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// create actions for loadBooks, addBook, removeBook
export const loadBooks = () => ({ type: LOAD_BOOKS });
export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

// Initial state
const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];
// create reducer functions and cases to LOAD_BOOKS, ADD_BOOK, REMOVE_BOOK
export default function reducer(state = { load: false, books: initialState }, action) {
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
        books: [...state.books.filter((book) => book.id !== action.id)],
      };
    default:
      return state;
  }
}
