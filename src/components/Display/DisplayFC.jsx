import React from 'react';
import { useSelector } from 'react-redux';
import { DisplayWrapper, DisplayText } from './DisplayStyles';

const DisplayFC = () => {
    const screenValue = useSelector((state) => state.calculator.num);
    return (
        <DisplayWrapper>
            <DisplayText>{screenValue === '' ? 0 : screenValue}</DisplayText>
        </DisplayWrapper>
    );
};

export default DisplayFC;
