import { ReduxApp, PersistenceApp } from './routes';
import ReactDOM from 'react-dom/client';
import { isUsingPersistence } from './constants';

let app = isUsingPersistence ? <PersistenceApp /> : <ReduxApp />; //Sets Conditional to enable or disable redux-persistence since persitence is slower to load pages
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(app);
