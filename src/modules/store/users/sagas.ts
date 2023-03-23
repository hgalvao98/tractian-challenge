import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { useGetData } from "../../../hooks";
import { actionType } from "../../../types";

function* getUser(user: actionType) {
  try {
    const data: AxiosResponse = yield call(useGetData, `/users/${user?.id}`);
    yield put({ type: "FETCH_USER_SUCCESS", payload: data });
  } catch (e) {
    yield put({ type: "FETCH_USER_FAILED", message: e.message });
  }
}

export default function* mySaga() {
  yield takeLatest("FETCH_USER_REQUEST", getUser);
}
