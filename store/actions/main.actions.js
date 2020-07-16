import { createActionFactory } from '../../common/store/helpers';

const factory = createActionFactory('MAIN');

export const test = factory.create('TEST');
export const testAsync = factory.createAsync('TEST_ASYNC');