import { createSlice } from '@reduxjs/toolkit';

export const testimonialsSlice = createSlice({
  name: 'testimonials',

  initialState: {
    testimonials: null,
  },

  reducers: {
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
    },
    default: (state, action) => {
      return state;
    },
  },
});

export const { setTestimonials } = testimonialsSlice.actions;

export const selectTestimonials = (state) => state.testimonials;

export default testimonialsSlice.reducer;
