import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import mainReducer from './main.reducer';

export default (history) => combineReducers({
  main: mainReducer,
  router: connectRouter(history),
});
