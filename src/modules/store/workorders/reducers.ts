import { PayloadAction } from "@reduxjs/toolkit";
import {
  FETCH_WORK_FAIL,
  FETCH_WORK_REQUEST,
  FETCH_WORK_SUCCESS,
} from "./types";

const initialState = {
  status: "",
  message: "",
  workData: [],
};

export default (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case FETCH_WORK_REQUEST:
      return { ...state, status: "Running" };
    case FETCH_WORK_SUCCESS:
      return { ...state, workData: action.payload, status: "Success" };
    case FETCH_WORK_FAIL:
      return { ...state, message: action.payload, status: "Fail" };
    default:
      return state;
  }
};
