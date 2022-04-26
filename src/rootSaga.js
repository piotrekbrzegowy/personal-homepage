import { all } from "@redux-saga/core/effects";
import { watchFetchRepositories } from "./Homepage/homepageSaga";

export default function* rootSaga() {
    yield all([
        watchFetchRepositories(),
    ]);
};