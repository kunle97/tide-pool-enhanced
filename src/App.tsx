import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from '@/store';
import '@/index.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import MergedCruises from './components/Dashboard/Cruises/MergedCruises';
import RejectedCruises from './components/Dashboard/Cruises/RejectedCruises';
import UnderReviewCruises from './components/Dashboard/Cruises/UnderReviewCruises';
import Login from './components/Dashboard/Login';
import Register from './components/Dashboard/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/merged-cruises',
    element: <MergedCruises />,
  },
  {
    path: '/rejected-cruises',
    element: <RejectedCruises />,
  },
  {
    path: '/under-review-cruises',
    element: <UnderReviewCruises />,
  },
]);

const MainContext = React.createContext({});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainContext.Provider value={{}}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </Provider>
  </React.StrictMode>,
);
