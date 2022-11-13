import React from 'react';
import KeyCC from '@components/Key/KeyCC';
import { keys6, keys } from '@constants/KeysConstants';
import { KeypadWrapper, Key } from './styles';

class KeypadFC extends React.PureComponent {
  render() {
    return (
      <KeypadWrapper>
        {keys.map((element) => (
          <Key key={element}>
            {element.map((key) => (
              <KeyCC key={key} element={key} />
            ))}
          </Key>
        ))}

        <Key>
          {keys6.map((element) => (
            <KeyCC key={element} element={element} />
          ))}
        </Key>
      </KeypadWrapper>
    );
  }
}

export default KeypadFC;
