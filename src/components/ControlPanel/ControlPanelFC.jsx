import React, { useCallback, useEffect, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import HistoryFC from '@components/History/HistoryFC';
import { PanelWrapper, HistoryBtn } from './styles';

function ControlPanelFC() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    localStorage.setItem('isShown', !isShown);
    setIsShown((current) => !current);
  };
  const storageIsShown = localStorage.getItem('isShown');
  const checkLocalStorage = useCallback(() => storageIsShown !== 'false', [storageIsShown]);
  useEffect(() => {
    setIsShown(checkLocalStorage);
  }, [setIsShown, checkLocalStorage]);

  return (
    <PanelWrapper isShown={isShown}>
      <HistoryBtn onClick={handleClick} data-cy="open-history">
        {isShown ? <SlArrowRight /> : <SlArrowLeft />}
      </HistoryBtn>
      <HistoryFC isShown={isShown} />
    </PanelWrapper>
  );
}

export default ControlPanelFC;
