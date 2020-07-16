import { all, take } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';

import { mainSaga } from './main.saga';

export default function* () {
  yield take(REHYDRATE);
  yield all([
    mainSaga(),
    
  ]);
}
