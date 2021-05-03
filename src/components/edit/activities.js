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
    removeActivity: (state, action) => {
      state.activity = state.activity.filter(act => act.id !== action.payload)
    },
    editActivity: (state, action) => {
      const { id } = action.payload
      state.activity[id] = action.payload
    }
  },
});

export const { setActivity, removeActivity, editActivity } = actsSlice.actions;

export const selectActivity = (state) => state.activity.activity;

export default actsSlice.reducer;
