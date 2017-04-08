import set from './step2';
import { STEP2_SET } from '../constants';

describe('step2 actions', () => {
  it('should create an action to set item', () => {
    const expectedAction = {
      type: STEP2_SET,
      item: 'item',
    };
    expect(set('item')).toEqual(expectedAction);
  });
});
