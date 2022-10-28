import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { loadButton, loadCE, loadC } from '@store/actions/CalculatorActions';
import { KeyWrapper } from './KeyStyles';

const KeyFC = ({ element }) => {
    const dispatch = useDispatch();

    const clickHandler = (el) => {
        if (el === 'CE') {
            dispatch(loadCE(element));
        } else if (el === 'C') {
            dispatch(loadC(element));
        } else {
            dispatch(loadButton(element));
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
