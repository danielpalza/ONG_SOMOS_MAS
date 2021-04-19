import { createSlice } from '@reduxjs/toolkit';

export const actsSlice = createSlice({
  name: 'activity',

  initialState: {
    activity: null,
  },

  reducers: {
    setActivity: (state, action) => {
      state.activity = action.payload;
    },
  },
});

export const { setActivity } = actsSlice.actions;

export const selectActivity = (state) => state.activity.activity;

export default actsSlice.reducer;
