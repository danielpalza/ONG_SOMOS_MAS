import { createSlice } from '@reduxjs/toolkit';

export const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        loading: false,
        error: null
    },
    reducers: {
        setLoading: state => {
            state.loading = true
            state.error = null
        },
        successFetch: state => {
            state.loading = false
        },
        failFetch: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },
});

export const { failFetch, setLoading, successFetch } = fetchSlice.actions;

export const selectFetch = state => state.fetch;

export default fetchSlice.reducer;
