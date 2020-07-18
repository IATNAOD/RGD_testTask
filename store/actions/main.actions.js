import { createActionFactory } from '../../common/store/helpers';

const factory = createActionFactory('MAIN');

export const buyTickets = factory.create('BUY_TICKETS');
export const buyTicketsAsync = factory.createAsync('BUY_TICKETS_ASYNC');

export const clearState = factory.create('CLEAR_STATE');
export const clearStateAsync = factory.createAsync('CLEAR_STATE_ASYNC');