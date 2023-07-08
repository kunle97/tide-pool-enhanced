import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, BrowserRouter, Route, RouterProvider } from 'react-router-dom';
import { store } from '@/store';
import '@/index.css';
import Table from './components/Table';
import Home from './components/Home';

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
    path: '/cruises',
    element: <Table />,
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
