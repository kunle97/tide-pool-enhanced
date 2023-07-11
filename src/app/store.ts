import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from "../features/userSlice";
import  { persistStore,persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';
import { makeid } from '@/helpers/util';
export type UserState = {
  user: any;
}

const persistConfig = {
  key: makeid(10),
  storage
}

const reducer = combineReducers({
  user:userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore<any>({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
