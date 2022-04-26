import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import homepageSlice from "./Homepage/homepageSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        homepage: homepageSlice,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);