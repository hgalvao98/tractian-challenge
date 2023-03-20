import { all, fork } from "redux-saga/effects";

import DataSagas from "./sagas";

export default function* rootSaga() {
    yield all([fork(DataSagas)]);
}