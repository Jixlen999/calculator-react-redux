import {
    loadButton,
    loadCE,
    loadC,
    loadAnswer,
} from '@store/actions/CalculatorActions';
import { addToHistory } from '../store/actions/CalculatorActions';
import calculateExpression from './calculationFunc';
import normalizeExpression from './normalizeFunc';

export default function clickHandler(el, dispatch, screenValue, answer) {
    const operators = ['+', '-', '/', '*', '(', ')', '%'];
    if (el === 'CE') {
        if (answer === '') {
            dispatch(loadCE());
        }
    } else if (el === 'C') {
        dispatch(loadC());
    } else if (el === '=') {
        const result = calculateExpression(normalizeExpression(screenValue));
        dispatch(loadAnswer(result));
        //Если результат не валидный, то он в историю не добавляется
        if (result !== 'Invalid input') {
            dispatch(addToHistory(screenValue, `${screenValue} = ${result}`));
        }
    } else {
        const prevAnswer = answer;
        if (prevAnswer !== '') {
            dispatch(loadC());
        }
        if (operators.includes(el)) {
            if (prevAnswer !== '') {
                if (prevAnswer !== 'Invalid input') {
                    dispatch(loadButton(prevAnswer));
                } else {
                    dispatch(loadButton(0));
                }
            }
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
