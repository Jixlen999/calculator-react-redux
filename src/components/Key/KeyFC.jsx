import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { loadButton, loadCE, loadC } from '@store/actions/CalculatorActions';
import { KeyWrapper } from './KeyStyles';

const KeyFC = ({ element }) => {
    const dispatch = useDispatch();
    const screenValue = useSelector((state) => state.calculator.num);

    const clickHandler = (el) => {
        const operators = ['+', '-', '\\', '*'];
        if (el === 'CE') {
            dispatch(loadCE());
        } else if (el === 'C') {
            dispatch(loadC());
        } else if (el === '=') {
            //здесь сделать проверки на ввод и рассчеты, а также добавить в историю при валидности
            //note: в сторе все хранится в виде "1 + 2 + 2.1", т.е. знаки отделены пробелами => при составлении массива,
            // надо будет его разбить по пробелами, чтобы было удобно различать числа(даже десятичные) и знаки
        } else {
            if (operators.includes(el)) {
                if (screenValue === '') {
                    dispatch(loadButton(0));
                }
                dispatch(loadButton(` ${el} `));
            } else {
                if (
                    el === '.' &&
                    (screenValue[screenValue.length - 1] === ' ' ||
                        screenValue.length === 0)
                ) {
                    console.log(screenValue[screenValue.length - 1]);
                    dispatch(loadButton(`0${element}`));
                } else {
                    dispatch(loadButton(el));
                }
            }
        }
    };

    return (
        <KeyWrapper onClick={() => clickHandler(element)}>{element}</KeyWrapper>
    );
};

KeyFC.propTypes = {
    element: PropTypes.string.isRequired,
};

export default KeyFC;
