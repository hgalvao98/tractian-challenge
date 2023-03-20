import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { useGetData } from '../../../hooks'
import { actionType } from '../../../types'

function* getAllWorkOrders() {
    try {
        const data: AxiosResponse = yield call(useGetData, '/workorders')
        yield put({ type: 'FETCH_ALL_WORK_SUCCESS', payload: data })
    } catch (e) {
        yield put({ type: 'FETCH_ALL_WORK_FAILED', message: e.message })
    }
}

function* getWork(work: actionType) {
    try {
        const data: AxiosResponse = yield call(useGetData, `/workorders/${work?.id}`)
        yield put({ type: 'FETCH_WORK_SUCCESS', payload: data })
    } catch (e) {
        yield put({ type: 'FETCH_WORK_FAILED', message: e.message })
    }
}


export default function* mySaga() {
    yield takeLatest('FETCH_ALL_WORK_REQUEST', getAllWorkOrders)
    yield takeLatest('FETCH_WORK_REQUEST', getWork)
}