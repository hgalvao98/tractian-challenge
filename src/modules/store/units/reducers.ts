import { PayloadAction } from "@reduxjs/toolkit";
import {
  FETCH_UNIT_FAIL,
  FETCH_UNIT_REQUEST,
  FETCH_UNIT_SUCCESS,
} from "./types";

const initialState = {
  status: "",
  message: "",
  unitData: [],
};

export default (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case FETCH_UNIT_REQUEST:
      return { ...state, status: "Running" };
    case FETCH_UNIT_SUCCESS:
      return { ...state, unitData: action.payload, status: "Success" };
    case FETCH_UNIT_FAIL:
      return { ...state, message: action.payload, status: "Fail" };
    default:
      return state;
  }
};
