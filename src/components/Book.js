import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { removeBook, reqRemoveBook, removeBookError } from '../redux/books/books';
import styles from '../styling/Book.module.css';

const Book = ({
  id,
  title,
  author,
  category,
  progress,
}) => {
  const circle = useRef(null);
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
  const drawCircle = () => {
    const ctx = circle.current.getContext('2d');

    ctx.lineWidth = '7';
    ctx.beginPath();

    ctx.strokeStyle = 'lightgray';
    ctx.arc(150, 70, 60, 0, (2 * Math.PI));
    ctx.stroke();

    // 100% --> 100 / 100 = 1
    // progress --> 100 / progress
    ctx.beginPath();
    ctx.strokeStyle = '#339AF0';
    ctx.arc(150, 70, 60, 0, (2 * Math.PI) / (100 / progress));
    ctx.stroke();
  };

  useEffect(() => {
    drawCircle();
  }, []);

  return (
    <div className={styles.book}>
      <div className={styles.left}>
        <div className={styles.book_info}>
          <p className={styles.category}>{category}</p>
          <h2>{title}</h2>
          <p className={styles.author}>{author}</p>
          <ul>
            <li><button className={styles.btn} type="button">Comments</button></li>
            <li>
              <button className={styles.btn} type="button" onClick={handleClick}>
                {selected === id ? 'Removing...' : 'Remove'}
              </button>
            </li>
            <li><button className={styles.btn} type="button">Edit</button></li>
          </ul>
        </div>
        <div className={styles.book_progress}>
          <div className={styles.progress}>
            <canvas color="green" ref={circle} className={styles.circle} />
          </div>
          <div className={styles.precentage}>
            <h5>{`${progress}%`}</h5>
            <p>Completed</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.current}>CURRENT CHAPTER</p>
        <p className={styles.chapter}>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};
export default Book;
