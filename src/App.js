import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import BookList from './components/BookList';
import Categories from './components/Categories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BookList />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
