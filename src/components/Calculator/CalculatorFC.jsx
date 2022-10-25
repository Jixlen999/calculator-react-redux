import React from 'react';
import styled from 'styled-components';
import DisplayFC from '@components/Display/DisplayFC';
import KeypadFC from '@components/Keypad/KeypadFC';

const CalculatorWrapper = styled.div`
    padding-right: 15px;
    height: 100%;
    width: 80%;
    border-right: 2px solid #717171;
`;

const CalculatorFC = () => {
    return (
        <CalculatorWrapper>
            <DisplayFC />
            <KeypadFC />
        </CalculatorWrapper>
    );
};

export default CalculatorFC;
