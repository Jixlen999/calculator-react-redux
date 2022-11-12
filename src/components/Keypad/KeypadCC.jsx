import React from 'react';
import KeyCC from '@components/Key/KeyCC';
import { keys6, keys } from '@constants/KeysConstants';
import KeypadWrapper from './styles';

class KeypadFC extends React.PureComponent {
  render() {
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
              <KeyCC key={key} element={key} />
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
            <KeyCC key={element} element={element} />
          ))}
        </div>
      </KeypadWrapper>
    );
  }
}

export default KeypadFC;
