import {
  STEP1_ADD,
  STEP1_DELETE,
  STEP2_SET,
  STEP3_SET,
  STEP4_SET,
} from '../constants';
import reducer from './Steps';

describe('steps reducers', () => {
  it('should return default state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual({
      step1: [],
      step2: '',
      step3: '',
      step4: '',
    });
  });
  it('should handle STEP1_ADD', () => {
    expect(
      reducer(undefined, {
        type: STEP1_ADD,
        item: 'A',
      }),
    ).toEqual({
      step1: ['A'],
      step2: '',
      step3: '',
      step4: '',
    });
  });
  it('should handle STEP1_DELETE', () => {
    expect(
      reducer({
        step1: ['A'],
        step2: '',
        step3: '',
        step4: '',
      }, {
        type: STEP1_DELETE,
        item: 'A',
      }),
    ).toEqual({
      step1: [],
      step2: '',
      step3: '',
      step4: '',
    });
  });
  it('should handle STEP2_SET', () => {
    expect(
      reducer(undefined, {
        type: STEP2_SET,
        item: 'B',
      }),
    ).toEqual({
      step1: [],
      step2: 'B',
      step3: '',
      step4: '',
    });
  });
  it('should handle STEP3_SET', () => {
    expect(
      reducer(undefined, {
        type: STEP3_SET,
        item: '@aaa',
      }),
    ).toEqual({
      step1: [],
      step2: '',
      step3: '@aaa',
      step4: '',
    });
  });
  it('should handle STEP4_SET', () => {
    expect(
      reducer(undefined, {
        type: STEP4_SET,
        item: 'C',
      }),
    ).toEqual({
      step1: [],
      step2: '',
      step3: '',
      step4: 'C',
    });
  });
});
