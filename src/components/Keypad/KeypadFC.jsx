import React from 'react';
import KeyFC from '@components/Key/KeyFC';
import KeypadWrapper from './styles';

const keys1 = ['%', '9', '8', '('];
const keys2 = ['*', '7', '6', ')'];
const keys3 = ['/', '5', '4', '±'];
const keys4 = ['+', '3', '2', '.'];
const keys5 = ['-', '1', '0', '='];
const keys6 = ['C', 'CE'];
const keys = [keys1, keys2, keys3, keys4, keys5];

function KeypadFC() {
  return (
    <KeypadWrapper>
      {keys.map((element) => (
        <div
          style={{
            display: 'flex',
            gap: '10%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          key={element}
        >
          {element.map((key) => (
            <KeyFC key={key} element={key} />
          ))}
        </div>
      ))}

      <div
        style={{
          display: 'flex',
          gap: '10%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {keys6.map((element) => (
          <KeyFC key={element} element={element} />
        ))}
      </div>
    </KeypadWrapper>
  );
}

export default KeypadFC;
