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
    const operatorsAndBrackets = ['+', '-', '/', '*', '(', ')', '%'];
    const operatorsOnly = ['+', '-', '/', '*', '%'];
    if (el === 'CE') {
        if (answer === '') {
            //Удаление символа для операторов и скобок, чтобы дуалились и лишние пробелы
            if (screenValue[screenValue.length - 1] === ' ') {
                for (let i = 0; i < 3; ++i) {
                    dispatch(loadCE());
                }
            } else {
                //Для всех остальных
                dispatch(loadCE());
            }
        }
    } else if (el === 'C') {
        dispatch(loadC());
    } else if (el === '=') {
        if (answer === '') {
            const result = calculateExpression(
                normalizeExpression(screenValue),
            );
            dispatch(loadAnswer(result));
            //Если результат не валидный, то он в историю не добавляется
            if (
                result !== 'Invalid input' &&
                result !== 'Division by zero error'
            ) {
                dispatch(
                    addToHistory(
                        `${screenValue} =`,
                        `${screenValue} = ${result}`,
                    ),
                );
            }
        }
    } else {
        const prevAnswer = answer;
        if (prevAnswer !== '') {
            dispatch(loadC());
        }
        if (operatorsAndBrackets.includes(el)) {
            if (
                operatorsOnly.includes(el) &&
                operatorsOnly.includes(screenValue[screenValue.length - 2]) &&
                el !== screenValue[screenValue.length - 2]
            ) {
                dispatch(loadCE());
                dispatch(loadCE());
            } else if (el === screenValue[screenValue.length - 2]) {
                return;
            }
            if (prevAnswer !== '') {
                if (
                    prevAnswer !== 'Invalid input' &&
                    prevAnswer !== 'Division by zero error'
                ) {
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
            if (el === '±') {
                negativePositiveChange(screenValue, dispatch, prevAnswer);
            } else if (el === '.') {
                //Обработка на случай, если последний эл-т - оператор, скобка или точка
                if (
                    screenValue[screenValue.length - 2] !== ')' &&
                    screenValue[screenValue.length - 1] !== '.'
                ) {
                    if (
                        screenValue[screenValue.length - 1] === ' ' ||
                        screenValue.length === 0
                    ) {
                        dispatch(loadButton(`0${el}`));
                    } else if (prevAnswer) {
                        dispatch(loadButton(`0${el}`));
                    } else {
                        dispatch(loadButton(el));
                    }
                }
            } else {
                //Для цифр
                dispatch(loadButton(el));
            }
        }
    }
}

const negativePositiveChange = (screenValue, dispatch, prevAnswer) => {
    // if (
    //     prevAnswer !== '' &&
    //     prevAnswer !== 'Invalid input' &&
    //     prevAnswer !== 'Division by zero error'
    // ) {
    // } Не работает с ответом т е после получения ответа, не меняет у него знак, а делает какую-то дичь
    if (prevAnswer !== '') {
        if (
            prevAnswer !== 'Invalid input' &&
            prevAnswer !== 'Division by zero error'
        ) {
            dispatch(loadButton(prevAnswer));
            screenValue = String(prevAnswer);
            prevAnswer = '';
        }
    }
    const numbers = screenValue.split(' ').filter((el) => !Number.isNaN(+el));
    if (
        numbers[numbers.length - 1].match(/\d/) ||
        screenValue[screenValue.length - 1] === ')'
    ) {
        const notOperations = [' ', '.', ')', '('];
        let symbols = [];
        let digits = [];
        if (
            screenValue[screenValue.length - 3] === '(' ||
            screenValue[screenValue.length - 6] === '('
        ) {
            //Если перед эл-м открывается скобка - составляем массив из символов и операторов, начиная с нее
            const bracketIndex = screenValue.lastIndexOf('(');
            screenValue = screenValue.slice(bracketIndex + 2);
            symbols = screenValue
                .split('')
                .filter((el) => !el.match(/\d/) && !notOperations.includes(el));
            digits = screenValue.split(' ').filter((el) => el.match(/\d/));
        } else {
            //В ином случае - составляем из всего выражения
            symbols = screenValue
                .split('')
                .filter((el) => !el.match(/\d/) && !notOperations.includes(el));
            digits = screenValue.split(' ').filter((el) => el.match(/\d/));
        }
        //Обработка для первого числа, введенного в строку (т.е для первого и единственного положительного символа)
        if (symbols.length === 0) {
            const screenVal = screenValue;
            for (let i = 0; i < screenValue.length; ++i) {
                dispatch(loadCE());
            }
            dispatch(loadButton(` - ${screenVal}`));
            //Для первого и единственного отрицательного
        } else if (
            symbols.length === 1 &&
            digits.length === 1 &&
            symbols[0] === '-'
        ) {
            const screenVal = screenValue.slice(3);
            for (let i = 0; i < screenValue.length; ++i) {
                dispatch(loadCE());
            }
            dispatch(loadButton(`${screenVal}`));
        } else {
            const lastSymb = symbols[symbols.length - 1];
            const indexOfLastSymb = screenValue.lastIndexOf(lastSymb);
            let afterSymb = screenValue.slice(indexOfLastSymb + 1);
            const beforeSymb = screenValue.slice(0, indexOfLastSymb);
            const lengthDiff = screenValue.length - beforeSymb.length;
            if (lastSymb === '+' || lastSymb === '-') {
                if (lastSymb === '+') {
                    for (let i = 0; i < lengthDiff; ++i) {
                        dispatch(loadCE());
                    }
                    dispatch(loadButton(`+ ( -${afterSymb} )`));
                } else {
                    if (beforeSymb[beforeSymb.length - 2] === '(') {
                        for (let i = 0; i < lengthDiff + 2; ++i) {
                            dispatch(loadCE());
                        }
                        afterSymb = afterSymb.slice(1, -2);
                        dispatch(loadButton(`${afterSymb}`));
                    } else {
                        for (let i = 0; i < lengthDiff; ++i) {
                            dispatch(loadCE());
                        }
                        dispatch(loadButton(`- ( -${afterSymb} )`));
                    }
                }
            } else {
                //Обработка для случаев, когда послений введенный оператор - не минус, и не плюс
                //В таком случае просто преврщаем el => (- el)
                for (let i = 0; i < lengthDiff; ++i) {
                    dispatch(loadCE());
                }
                dispatch(loadButton(`${lastSymb} ( -${afterSymb} )`));
            }
        }
    }
};
