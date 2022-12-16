import NavBar from './NavBar';
import Book from './Book';

const BookList = () => (
  <div>
    <NavBar />
    <div>
      <Book title="book 1" author="author 1" />
      <Book title="book 1" author="author 1" />
      <Book title="book 1" author="author 1" />
      <Book title="book 1" author="author 1" />
    </div>
  </div>
);

export default BookList;
