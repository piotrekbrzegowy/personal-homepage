import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
    name: "homepage",
    initialState: {
        repositories: [],
        loading: true,
        error: false,
    },
    reducers: {
        fetchRepositories: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchRepositoriesSuccess: (state, {payload: data}) => {
            state.repositories = data;
            state.loading = false;
            state.error = false;
        },
        fetchRepositoriesError: (state) => {
            state.loading = false;
            state.error = true;
        },
        resetState: (state) => {
            state.repositories = [];
            state.loading = [];
            state.error = [];
        },
    },
})

export const { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError, resetState} = homepageSlice.actions;

export const selectRepositories = (state) => state.homepage.repositories;
export const selectLoading = (state) => state.homepage.loading;
export const selectError = (state) => state.homepage.error;

export default homepageSlice.reducer;