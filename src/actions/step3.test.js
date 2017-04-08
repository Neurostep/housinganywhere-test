import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import set from './step3';
import { STEP3_SET } from '../constants';

const mockStore = configureMockStore([thunk]);

describe('step3 actions', () => {
  it('should create an action to set item', () => {
    const expectedAction = {
      type: STEP3_SET,
      item: '@aaa',
    };
    const store = mockStore({ todos: [] });
    store.dispatch(set('@aaa'))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
  it('should create an action to decline item', () => {
    const expectedAction = {
      type: STEP3_SET,
      item: '',
    };
    const store = mockStore({ todos: [] });
    store.dispatch(set('aaa'))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
});

