import { useDispatch } from 'react-redux';
import NavBar from './NavBar';
import { checkStatus } from '../redux/categories/categories';
import styles from '../styling/Categories.module.css';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <NavBar />
      <div>
        <button className={styles.status} type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      </div>
    </div>
  );
};
export default Categories;
