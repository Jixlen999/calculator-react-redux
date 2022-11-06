import React from 'react';
import PropTypes from 'prop-types';
import clickHandler from '@utils/keyClickHandler';

import { KeyWrapper } from './KeyStyles';
import { useDispatch, useSelector } from 'react-redux';

const KeyFC = ({ element }) => {
    const dispatch = useDispatch();
    const screenValue = useSelector((state) => state.calculator.num);
    const answer = useSelector((state) => state.calculator.answer);

    return (
        <KeyWrapper
            onClick={() => clickHandler(element, dispatch, screenValue, answer)}
        >
            {element}
        </KeyWrapper>
    );
};

KeyFC.propTypes = {
    element: PropTypes.string.isRequired,
};

export default KeyFC;
