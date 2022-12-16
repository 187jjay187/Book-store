import NavBar from './NavBar';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => (
  <div>
    <NavBar />
    <div>
      <Book title="book 1" author="author 1" />
      <Book title="book 1" author="author 1" />
      <Book title="book 1" author="author 1" />
      <Book title="book 1" author="author 1" />
    </div>
    <AddBook />
  </div>
);

export default BookList;
