import React from 'react';
import KeyFC from '@components/Key/KeyFC';
import { KeypadWrapper } from './KeypadStyles';

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
