import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./githubAPI";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./homepageSlice";

function* fetchRepositoriesHandler() {
    const githubAPIBaseURL = "https://api.github.com";
    const username = "piotrekbrzegowy";

    const repositoriesPath = `${githubAPIBaseURL}/users/${username}/repos?sort=created`;

    try {
        yield delay(1000); //just to show loader
        const repositories = yield call(getRepositories, repositoriesPath);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    };
};

export function* watchFetchRepositories() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};