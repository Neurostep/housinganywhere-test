import set from './step4';
import { STEP4_SET } from '../constants';

describe('step4 actions', () => {
  it('should create an action to set item', () => {
    const expectedAction = {
      type: STEP4_SET,
      item: 'item',
    };
    expect(set('item')).toEqual(expectedAction);
  });
});

