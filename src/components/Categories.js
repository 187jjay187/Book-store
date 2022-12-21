import { useDispatch } from 'react-redux';
import NavBar from './NavBar';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <NavBar />
      <div>
        <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      </div>
    </div>
  );
};
export default Categories;
