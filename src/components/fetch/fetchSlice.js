import { createSlice } from '@reduxjs/toolkit';

export const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        loading: false,
        error: null,
        success: false,
        message: null
    },
    reducers: {
        setLoading: state => {
            state.loading = true
            state.error = null
        },
        unSetLoading: state => {
            state.loading = false
        },
        successFetch: (state, action) => {
            state.loading = false
            state.success = true
            state.message = action.payload
        },
        failFetch: (state, action) => {
            state.loading = false
            state.error = action.payload
            state.message = action.payload
            state.success = false
        },
        resetFetch: (state, action) => {
            console.log(2)
            state.loading = false
            state.error = null
            state.success = false
            state.message = null

        }
    },
});

export const { failFetch, setLoading, successFetch, unSetLoading, resetFetch } = fetchSlice.actions;

export const selectFetch = state => state.fetch;

export default fetchSlice.reducer;
