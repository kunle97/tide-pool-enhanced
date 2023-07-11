import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { store } from '@/app/store';
import '@/index.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import MergedCruises from './components/Dashboard/Cruises/MergedCruises';
import RejectedCruises from './components/Dashboard/Cruises/RejectedCruises';
import UnderReviewCruises from './components/Dashboard/Cruises/UnderReviewCruises';
import Login from './components/Dashboard/Login';
import Register from './components/Dashboard/Register';
import { worker } from './api/mocks/browser';
import RequireAuth from './api/auth/RequireAuth';
import PageNotFound from './components/Errors/PageNotFound';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import URLBuilder from './components/Dashboard/URLBuilder/URLBuilder';
import MapViewer from './components/Dashboard/MapViewer';

let persistor = persistStore(store);

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const MainContext = React.createContext({});

const PersistenceApp = () => {
  return (
    <Provider store={store}>
      <MainContext.Provider value={{}}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path='*' element={<PageNotFound />} />
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route element={<RequireAuth />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/merged-cruises' element={<MergedCruises />} />
                <Route path='/rejected-cruises' element={<RejectedCruises />} />
                <Route path='/under-review-cruises' element={<UnderReviewCruises />} />
                <Route path='/url-builder' element={<URLBuilder />} />
                <Route path='/map-viewer/:lat/:long/:entry_id' element={<MapViewer />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </MainContext.Provider>
    </Provider>
  );
};

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <MainContext.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/merged-cruises' element={<MergedCruises />} />
            <Route path='/rejected-cruises' element={<RejectedCruises />} />
            <Route path='/under-review-cruises' element={<UnderReviewCruises />} />
            <Route path='/url-builder' element={<URLBuilder />} />
            <Route path='/map-viewer/:lat/:long/:entry_id' element={<MapViewer />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </Provider>
  );
};

export { ReduxApp, PersistenceApp };
