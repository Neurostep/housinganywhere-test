import { checkIt } from "../api";

const set = (val) => {
    return {
        type: "setStep3",
        item: val
    };
};

export const setText = (item) => {
    return function(dispatch) {
        return checkIt(item)
            .then(
                val => dispatch(set(val)),
                err => {
                  dispatch(set(""));
                  throw err;
                }
            );
    };
};