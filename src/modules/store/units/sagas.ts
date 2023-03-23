import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { useGetData } from "../../../hooks";
import { actionType } from "../../../types";

function* getUnit(unit: actionType) {
  try {
    const data: AxiosResponse = yield call(useGetData, `/units/${unit?.id}`);
    yield put({ type: "FETCH_UNIT_SUCCESS", payload: data });
  } catch (e) {
    yield put({ type: "FETCH_UNIT_FAILED", message: e.message });
  }
}

export default function* mySaga() {
  yield takeLatest("FETCH_UNIT_REQUEST", getUnit);
}
