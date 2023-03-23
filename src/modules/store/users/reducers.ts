import { PayloadAction } from "@reduxjs/toolkit";
import {
  FETCH_USER_FAIL,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./types";

const initialState = {
  status: "",
  message: "",
  userData: [],
};

export default (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, status: "Running" };
    case FETCH_USER_SUCCESS:
      return { ...state, userData: action.payload, status: "Success" };
    case FETCH_USER_FAIL:
      return { ...state, message: action.payload, status: "Fail" };
    default:
      return state;
  }
};
