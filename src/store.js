import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import homepageSlice from "./Homepage/homepageSlice";
import rootSaga from "./rootSaga";
import themeSlice from "./themeSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        homepage: homepageSlice,
        theme: themeSlice,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);