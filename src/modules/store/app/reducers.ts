import { PayloadAction } from "@reduxjs/toolkit";
import {
  FETCH_DATA_FAIL,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./types";

const initialState = {
  data: [],
};

export default (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, status: "Running" };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, status: "Success" };
    case FETCH_DATA_FAIL:
      return { ...state, message: action.payload, status: "Fail" };
    default:
      return state;
  }
};
