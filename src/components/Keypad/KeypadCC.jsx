import React from 'react';
import KeyCC from '@components/Key/KeyCC';
import { KeypadWrapper } from './KeypadStyles';

const keys1 = ['%', '9', '8', '('];
const keys2 = ['*', '7', '6', ')'];
const keys3 = ['/', '5', '4', '±'];
const keys4 = ['+', '3', '2', '.'];
const keys5 = ['-', '1', '0', '='];
const keys6 = ['C', 'CE'];
const keys = [keys1, keys2, keys3, keys4, keys5];

class KeypadFC extends React.Component {
    render() {
        return (
            <KeypadWrapper>
                {keys.map((element) => {
                    return (
                        <div
                            style={{
                                display: 'flex',
                                gap: '10%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                            key={element}
                        >
                            {element.map((key) => {
                                return <KeyCC key={key} element={key} />;
                            })}
                        </div>
                    );
                })}

                <div
                    style={{
                        display: 'flex',
                        gap: '10%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {keys6.map((element) => {
                        return <KeyCC key={element} element={element} />;
                    })}
                </div>
            </KeypadWrapper>
        );
    }
}

export default KeypadFC;