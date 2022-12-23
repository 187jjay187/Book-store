import PropTypes from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { removeBook, reqRemoveBook, removeBookError } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.books, shallowEqual);

  const handleClick = async () => {
    dispatch(reqRemoveBook(id));
    try {
      const res = await fetch(`${process.env.REACT_APP_BOOKS}/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ item_id: id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await res.text();
      dispatch(removeBook(id));
    } catch (err) {
      dispatch(removeBookError(err.message));
    }
  };
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <div>
        <button type="button" onClick={handleClick}>
          {selected === id ? 'Removing...' : 'Remove'}
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
