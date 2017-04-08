import { submitIt } from '../api';

const set = item => ({
  type: 'setStep5',
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
