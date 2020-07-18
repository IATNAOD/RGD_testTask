import { handleActions } from 'redux-actions';
import { buyTicketsAsync, clearStateAsync } from '../actions/main.actions';

const initialState = {
  success: true
};

export default handleActions({
  [buyTicketsAsync.success]: (s, a) => ({ ...s, success: true }),
  [buyTicketsAsync.failed]: (s, a) => ({ ...s, success: false }),
  [clearStateAsync.success]: (s, a) => ({ ...s, success: true }),
  [clearStateAsync.failed]: (s, a) => ({ ...s, success: true }),
}, initialState);
