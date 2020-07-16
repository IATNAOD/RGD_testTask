import { takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../common/store/helpers';
import {
  test, testAsync,

} from '../actions/main.actions';

import mainApi from '../../common/api/main.api';

export function* mainSaga() {
  yield takeEvery(test, bindAsyncActions(testAsync)(mainApi.test));
}
