import React from 'react';
import styled from 'styled-components';
import KeyFC from '@components/Key/KeyFC';

const KeypadWrapper = styled.div`
    width: 100%;
    height: 85%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10%;
    justify-content: space-between;
    padding: 20px 30px 0px 30px;
`;

const keys = [
    'C',
    '7',
    '8',
    '9',
    '*',
    '-',
    '4',
    '5',
    '6',
    '\\',
    '+',
    '1',
    '2',
    '3',
    '=',
    '.',
    '(',
    '0',
    ')',
    'CE',
];

const KeypadFC = () => {
    return (
        <KeypadWrapper>
            {keys.map((element) => {
                return <KeyFC key={element} element={element} />;
            })}
        </KeypadWrapper>
    );
};

export default KeypadFC;
