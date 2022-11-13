import React, { useState } from 'react';
import HistoryFC from '@components/History/HistoryFC';
import { PanelWrapper, HistoryBtn } from './styles';

function ControlPanelFC() {
  const [isShown, seIsShown] = useState(false);
  const handleClick = () => {
    seIsShown((current) => !current);
  };
  return (
    <PanelWrapper isShown={isShown}>
      <HistoryBtn onClick={handleClick} data-cy="open-history">
        {isShown ? <i className="fa-solid fa-chevron-right" /> : <i className="fa-solid fa-chevron-left" />}
      </HistoryBtn>
      <HistoryFC isShown={isShown} />
    </PanelWrapper>
  );
}

export default ControlPanelFC;
