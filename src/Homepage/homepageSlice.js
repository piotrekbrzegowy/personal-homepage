import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
    name: "homepage",
    initialState: {
        repositories: [],
        status: "initial",
    },
    reducers: {
        fetchRepositories: (state) => {
            state.repositories = null;
            state.status = "loading";
        },
        fetchRepositoriesSuccess: (state, {payload: data}) => {
            state.repositories = data;
            state.status = "success";
        },
        fetchRepositoriesError: (state) => {
            state.status = "error";
        },
        resetState: (state) => {
            state.repositories = [];
            state.status = "initial";
        },
    },
})

export const { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError, resetState} = homepageSlice.actions;

export const selectRepositories = (state) => state.homepage.repositories;
export const selectLoading = (state) => state.status === "loading";
export const selectError = (state) => state.status === "error";

export default homepageSlice.reducer;