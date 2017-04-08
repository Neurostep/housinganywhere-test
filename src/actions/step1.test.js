import { add, del } from './step1';
import { STEP1_ADD, STEP1_DELETE } from '../constants';

describe('step1 actions', () => {
  it('should create an action to add item', () => {
    const expectedAction = {
      type: STEP1_ADD,
      item: 'item',
    };
    expect(add('item')).toEqual(expectedAction);
  });
  it('should create an action to delete item', () => {
    const expectedAction = {
      type: STEP1_DELETE,
      item: '',
    };
    expect(del('')).toEqual(expectedAction);
  });
});
