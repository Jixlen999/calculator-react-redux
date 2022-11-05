import {
    loadButton,
    loadCE,
    loadC,
    loadAnswer,
} from '@store/actions/CalculatorActions';
import calculateExpression from './calculationFunc';
import normalizeExpression from './normalizeFunc';

export default function clickHandler(el, dispatch, screenValue) {
    const operators = ['+', '-', '/', '*', '(', ')', '%'];
    if (el === 'CE') {
        dispatch(loadCE());
    } else if (el === 'C') {
        dispatch(loadC());
    } else if (el === '=') {
        const result = calculateExpression(normalizeExpression(screenValue));
        dispatch(loadAnswer(result));
    } else {
        if (operators.includes(el)) {
            if (screenValue === '' && el !== ('(' || ')')) {
                //если еще ничего не было введено, но уже попытались ввести
                //арифм операцию - добавить 0 в качестве первого символа
                dispatch(loadButton(0));
                dispatch(loadButton(` ${el} `));
            } else if (screenValue[screenValue.length - 1] === ' ') {
                dispatch(loadButton(`${el} `));
            } else {
                dispatch(loadButton(` ${el} `)); //каждый знак (если за ним следует число) отделять пробелами
            }
        } else {
            if (
                el === '.' &&
                (screenValue[screenValue.length - 1] === ' ' ||
                    screenValue.length === 0)
            ) {
                console.log(screenValue[screenValue.length - 1]);
                dispatch(loadButton(`0${el}`));
            } else {
                dispatch(loadButton(el));
            }
        }
    }
}
