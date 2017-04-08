import { checkIt } from '../api';
import { STEP3_SET } from '../constants';

const set = val => ({
  type: STEP3_SET,
  item: val,
});

export default item =>
  dispatch =>
    checkIt(item)
      .then(
        val => dispatch(set(val)),
        (err) => {
          dispatch(set(''));
          throw err;
        },
      );
