import React from 'react';
import KeyFC from '@components/Key/KeyFC';
import { keys6, keys } from '@constants/KeysConstants';
import KeypadWrapper from './styles';

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
