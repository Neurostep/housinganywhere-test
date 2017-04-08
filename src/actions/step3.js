import { checkIt } from '../api';

const set = val => ({
  type: 'setStep3',
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
