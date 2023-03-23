import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { useGetData } from "../../../hooks";

function* getAllData() {
  try {
    const data: AxiosResponse = yield call(useGetData, "/db");
    yield put({ type: "FETCH_DATA_SUCCESS", payload: data });
  } catch (e) {
    yield put({ type: "FETCH_DATA_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest("FETCH_DATA_REQUEST", getAllData);
}

export default mySaga;
