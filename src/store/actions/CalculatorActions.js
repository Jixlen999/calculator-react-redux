import {
    LOAD_BUTTON,
    LOAD_ANSWER,
    LOAD_C,
    LOAD_CE,
} from '@constants/ActionsConstants';

export const loadButton = (num) => {
    return {
        type: LOAD_BUTTON,
        payload: num,
    };
};
export const loadC = () => {
    return {
        type: LOAD_C,
    };
};
export const loadCE = (num) => {
    return {
        type: LOAD_CE,
    };
};
export const loadAnswer = (answer) => {
    return {
        type: LOAD_ANSWER,
        payload: answer,
    };
};
