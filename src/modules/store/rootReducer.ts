import { combineReducers } from "redux";

import assets from "./assets/reducers";
import units from "./units/reducers";
import users from "./users/reducers";
import workorders from "./workorders/reducers";

const rootReducer = combineReducers({
    assets,
    units,
    users,
    workorders
});

export default rootReducer;
