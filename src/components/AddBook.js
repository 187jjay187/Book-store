import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, addBookError, reqAddBook } from '../redux/books/books';

// create add book component
const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('action');
  const dispatch = useDispatch();
  const { adding } = useSelector((state) => state.books, shallowEqual);
  const sendBook = async () => {
    dispatch(reqAddBook());
    try {
      const book = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      const res = await fetch(process.env.REACT_APP_BOOKS, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 201) {
        dispatch(addBook(book));
        setTitle('');
        setAuthor('');
        setCategory('');
      } else if (res.status >= 400 && res.status < 500) {
        dispatch(addBookError('You made a bad request!'));
      } else {
        dispatch(addBookError('There was a problem with the server!'));
      }
    } catch (err) {
      dispatch(addBookError(err.message));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    await sendBook();
    setTitle('');
    setAuthor('');
  };

  // create useState and new handle function
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        name="author"
        type="text"
        placeholder="author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="action">Action</option>
        <option value="programming">Porgramming</option>
        <option value="math">Math</option>
      </select>
      <button type="submit">{adding ? 'adding...' : 'Add Book'}</button>
    </form>
  );
};
export default AddBook;
