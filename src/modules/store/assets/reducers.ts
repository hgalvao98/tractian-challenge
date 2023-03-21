import { PayloadAction } from "@reduxjs/toolkit";
import {
    FETCH_ASSETS_FAIL,
    FETCH_ASSETS_REQUEST,
    FETCH_ASSETS_SUCCESS,
    FETCH_ASSET_FAIL,
    FETCH_ASSET_REQUEST,
    FETCH_ASSET_SUCCESS,
    FETCH_DATA_FAIL,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS
} from "./types";

const initialState = {
    data: [],
    allAssetsData: [],
    status: '',
    message: '',
    assetData: [],
}

export default (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, status: 'Running' };
        case FETCH_DATA_SUCCESS:
            return { ...state, data: action.payload, status: 'Success' };
        case FETCH_DATA_FAIL:
            return { ...state, message: action.payload, status: 'Fail' }
        case FETCH_ASSETS_REQUEST:
            return { ...state, status: 'Running' };
        case FETCH_ASSETS_SUCCESS:
            return { ...state, allAssetsData: action.payload, status: 'Success' };
        case FETCH_ASSETS_FAIL:
            return { ...state, message: action.payload, status: 'Fail' }
        case FETCH_ASSET_REQUEST:
            return { ...state, status: 'Running' };
        case FETCH_ASSET_SUCCESS:
            return { ...state, assetData: action.payload, status: 'Success' };
        case FETCH_ASSET_FAIL:
            return { ...state, message: action.payload, status: 'Fail' }
        default:
            return state;
    }
};