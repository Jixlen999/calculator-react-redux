import React from 'react';
import KeyFC from '@components/Key/KeyFC';
import { keys6, keys } from '@constants/KeysConstants';
import { KeypadWrapper, Key } from './styles';

function KeypadFC() {
  return (
    <KeypadWrapper>
      {keys.map((element) => (
        <Key key={element}>
          {element.map((key) => (
            <KeyFC key={key} element={key} />
          ))}
        </Key>
      ))}

      <Key>
        {keys6.map((element) => (
          <KeyFC key={element} element={element} />
        ))}
      </Key>
    </KeypadWrapper>
  );
}

export default React.memo(KeypadFC);
