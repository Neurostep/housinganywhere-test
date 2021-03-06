import {
  STEP1_ADD,
  STEP1_DELETE,
  STEP2_SET,
  STEP3_SET,
  STEP4_SET,
} from '../constants';

const defaultState = {
  step1: [],
  step2: '',
  step3: '',
  step4: '',
};
export default(state = defaultState, payload) => {
  switch (payload.type) {
    case STEP1_ADD:
      return {
        step1: [...state.step1, payload.item],
        step2: state.step2,
        step3: state.step3,
        step4: state.step4,
      };
    case STEP1_DELETE: {
      const newState = {};
      newState.step1 = state.step1.filter(item => item !== payload.item);
      if (!newState.step1.length) {
        newState.step2 = '';
        newState.step3 = '';
        newState.step4 = '';
      } else {
        newState.step2 = state.step2;
        newState.step3 = state.step3;
        newState.step4 = state.step4;
      }
      return newState;
    }
    case STEP2_SET:
      return {
        step1: [...state.step1],
        step2: payload.item,
        step3: state.step3,
        step4: state.step4,
      };
    case STEP3_SET:
      return {
        step1: [...state.step1],
        step2: state.step2,
        step3: payload.item,
        step4: state.step4,
      };
    case STEP4_SET:
      return {
        step1: [...state.step1],
        step2: state.step2,
        step3: state.step3,
        step4: payload.item,
      };
    default:
      return state;
  }
};
