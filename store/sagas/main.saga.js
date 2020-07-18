import { takeEvery } from 'redux-saga/effects';
import { bindAsyncActions } from '../../common/store/helpers';
import {
  buyTickets, buyTicketsAsync,
  clearState, clearStateAsync
} from '../actions/main.actions';

import mainApi from '../../common/api/main.api';

function clearStateWorker() {
  return true;
}

export function* mainSaga() {
  yield takeEvery(buyTickets, bindAsyncActions(buyTicketsAsync)(mainApi.buyTickets));
  yield takeEvery(clearState, bindAsyncActions(clearStateAsync)(clearStateWorker));
}
