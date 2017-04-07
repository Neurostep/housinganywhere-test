import { submitIt } from "../api";

const set = (item) => {
    return {
        type: "setStep5",
        item
    };
};

export const setText = (item) => {
    return function(dispatch) {
        return submitIt(item)
            .then(
                val => dispatch(set(item)),
                err => {
                  dispatch(set({}));
                  throw err;
                }
            );
    };
};