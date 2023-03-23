import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { useGetData } from "../../../hooks";
import { actionType } from "../../../types";

function* getAsset(asset: actionType) {
  try {
    const data: AxiosResponse = yield call(useGetData, `/assets/${asset?.id}`);
    yield put({ type: "FETCH_ASSET_SUCCESS", payload: data });
  } catch (e) {
    yield put({ type: "FETCH_ASSET_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest("FETCH_ASSET_REQUEST", getAsset);
}

export default mySaga;
