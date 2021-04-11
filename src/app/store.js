import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import fetchReducer from '../features/fetch/fetchSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    fetch: fetchReducer
  },
});
