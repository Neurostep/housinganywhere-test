import { submitIt } from '../api';
import { STEP5_SET } from '../constants';

const set = item => ({
  type: STEP5_SET,
  item,
});

export default item =>
  dispatch =>
    submitIt(item)
      .then(
        val => dispatch(set(val)),
        (err) => {
          dispatch(set({}));
          throw err;
        },
    );
