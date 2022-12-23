import { Link } from 'react-router-dom';
import styles from '../styling/NavBar.module.css';
import avatar from '../img/avatar.png';

const NavBar = () => (
  <nav className={styles.navbar}>
    <h1><Link to="/" className={styles.link}>Bookstore</Link></h1>

    <ul>
      <li><Link to="/" className={styles.link}>BOOKS</Link></li>
      <li><Link to="/categories" className={styles.link}>CATEGORIES</Link></li>
    </ul>
    <div className={styles.avatar}>
      <img src={avatar} alt="user avatar" />
    </div>
  </nav>
);
export default NavBar;
