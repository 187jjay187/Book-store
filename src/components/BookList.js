import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavBar from './NavBar';
import Book from './Book';
import AddBook from './AddBook';
import { setBooks, setBooksError, getBooks } from '../redux/books/books';
import styles from '../styling/BookList.module.css';
// compare previous and current state value
const BookList = () => {
  const { books, load, error } = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();
  const fetchBooks = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const booksData = Object.entries(data).map(([k, v]) => ({ id: k, ...v[0] }));
      return booksData;
    } catch (err) {
      return err;
    }
  };
  // useEffect hook to fetchBooks and set error message
  useEffect(() => {
    dispatch(getBooks());
    fetchBooks(process.env.REACT_APP_BOOKS)
      .then((data) => dispatch(setBooks(data)))
      .catch((err) => dispatch(setBooksError(err.message)));
  }, [dispatch]);

  return (
    <div className="container">
      <NavBar />
      <div className={styles.list}>
        {load ? 'loading...' : ''}
        {books.map(({
          id, title, author, category,
        }) => (
          <Book key={id} id={id} title={title} author={author} category={category} progress={50} />
        ))}
      </div>
      <AddBook />
      {error ? (
        <p className={styles.error}>
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default BookList;
