import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import counterReducer from '../components/counter/counterSlice';
import actsReducer from '../components/edit/activities';
import fetchReducer from '../components/fetch/fetchSlice';
import newsReducer from '../components/edit/news/newsSlice';
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
    activity: actsReducer,
    news: newsReducer,
    user: persistedReducer,
    fetch: fetchReducer,
  },
});
