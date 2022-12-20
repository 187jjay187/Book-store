import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <h1><Link to="/">Bookstore CMS</Link></h1>

    <ul>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/categories">CATEGORIES</Link></li>
    </ul>
  </nav>
);
export default NavBar;
