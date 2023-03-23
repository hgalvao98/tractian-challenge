import { all, fork } from "redux-saga/effects";

import App from "./app/sagas";
import AssetSagas from "./assets/sagas";
import UnitSagas from "./units/sagas";
import UserSagas from "./users/sagas";
import WorkSagas from "./workorders/sagas";

export default function* rootSaga() {
  yield all([
    fork(AssetSagas),
    fork(UnitSagas),
    fork(UserSagas),
    fork(WorkSagas),
    fork(App),
  ]);
}
