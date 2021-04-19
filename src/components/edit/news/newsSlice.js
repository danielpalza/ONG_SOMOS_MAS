import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
  name: 'news',

  initialState: {
    news: null,
  },

  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;

export const selectNews = (state) => state.news.news;

export default newsSlice.reducer;
