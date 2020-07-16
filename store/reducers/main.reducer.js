import { handleActions } from 'redux-actions';
import { testAsync } from '../actions/main.actions';

const initialState = {

};

export default handleActions({
  [testAsync.success]: (s, a) => ({ ...s, }),
  [testAsync.failed]: (s, a) => ({ ...s, }),
}, initialState);
