import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { useGetData } from '../../hooks'
import { actionType } from '../../types/types'

function* getAllData() {
    try {
        const data: AxiosResponse = yield call(useGetData, '/db')
        yield put({ type: 'FETCH_DATA_SUCCESS', payload: data })
    } catch (e) {
        yield put({ type: 'FETCH_DATA_FAILED', message: e.message })
    }
}

function* getAssets() {
    try {
        const data: AxiosResponse = yield call(useGetData, '/assets')
        yield put({ type: 'FETCH_ASSETS_SUCCESS', payload: data })
    } catch (e) {
        yield put({ type: 'FETCH_ASSETS_FAILED', message: e.message })
    }
}

function* getAsset(asset: actionType) {
    try {
        const data: AxiosResponse = yield call(useGetData, `/assets/${asset?.id}`)
        yield put({ type: 'FETCH_ASSET_SUCCESS', payload: data })
    } catch (e) {
        yield put({ type: 'FETCH_ASSET_FAILED', message: e.message })
    }
}

function* mySaga() {
    yield takeLatest('FETCH_DATA_REQUEST', getAllData)
    yield takeLatest('FETCH_ASSETS_REQUEST', getAssets)
    yield takeLatest('FETCH_ASSET_REQUEST', getAsset)
}

export default mySaga