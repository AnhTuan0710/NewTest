import { apiKind } from './../../Api/medicine';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getKindSuccess } from './Kind'

function* getKindFetch(): any {
    try {
        const res = yield call(apiKind)
        yield put(getKindSuccess(res.data))
    }
    catch (error) {
        console.log(error);
    }
}
function* kindSaga() {
    yield takeEvery('getKind/getKindFetch', getKindFetch)
}

export default kindSaga;

