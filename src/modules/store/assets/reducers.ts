import { PayloadAction } from "@reduxjs/toolkit";
import {
  FETCH_ASSET_FAIL,
  FETCH_ASSET_REQUEST,
  FETCH_ASSET_SUCCESS,
} from "./types";

const initialState = {
  status: "",
  message: "",
  assetData: [],
};

export default (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case FETCH_ASSET_REQUEST:
      return { ...state, status: "Running" };
    case FETCH_ASSET_SUCCESS:
      return { ...state, assetData: action.payload, status: "Success" };
    case FETCH_ASSET_FAIL:
      return { ...state, message: action.payload, status: "Fail" };
    default:
      return state;
  }
};
