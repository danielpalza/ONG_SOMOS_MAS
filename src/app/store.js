import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import newsReducer from '../components/edit/news/newsSlice';
import fetchReducer from '../components/fetch/fetchSlice';
import counterReducer from '../components/counter/counterSlice';
import userReducer from '../components/user/userSlice';

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
    news: newsReducer,
    user: persistedReducer,
    fetch: fetchReducer,
  },
});
