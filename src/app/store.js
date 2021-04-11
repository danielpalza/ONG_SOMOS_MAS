import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import fetchReducer from '../features/fetch/fetchSlice'
import { persistReducer } from 'redux-persist';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';

const reducers = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: persistedReducer,
    fetch: fetchReducer
  },
});
