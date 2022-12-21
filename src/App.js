import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookList from './components/BookList';
import Categories from './components/Categories';
import store from './redux/configureStore';

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
