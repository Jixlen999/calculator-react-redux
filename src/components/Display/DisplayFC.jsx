import React from 'react';
import { useSelector } from 'react-redux';
import { DisplayWrapper, DisplayText } from './DisplayStyles';

const DisplayFC = () => {
    const screenValue = useSelector((state) => state.calculator.num);
    const calcResult = useSelector((state) => state.calculator.answer);
    return (
        <DisplayWrapper>
            <DisplayText>
                {calcResult === ''
                    ? screenValue === ''
                        ? 0
                        : screenValue
                    : calcResult}
            </DisplayText>
        </DisplayWrapper>
    );
};

export default React.memo(DisplayFC);
