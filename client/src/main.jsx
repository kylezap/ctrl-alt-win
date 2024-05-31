import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SearchGames from './pages/SearchGames.jsx';
import SignUp from './pages/SignUp.jsx';
import Profile from './pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/signup',
        element: <Profile />
      },
      {
        path: '/search',
        element: <SearchGames />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
