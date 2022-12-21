import NavBar from './NavBar';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => (
  <div>
    <NavBar />
    <div>
      <Book title="book 1" author="John" />
      <Book title="book 2" author="Peter" />
      <Book title="book 3" author="Jane" />
      <Book title="book 4" author="Sam " />
    </div>
    <AddBook />
  </div>
);

export default BookList;
