import React from 'react';
import HistoryCC from '@components/History/HistoryCC';
import { PanelWrapper, HistoryBtn } from './styles';

class ControlPanelCC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  render() {
    const handleClick = () => {
      this.setState((prevState) => ({ isShown: !prevState.isShown }));
    };
    const { isShown } = this.state;
    return (
      <PanelWrapper
        style={{
          width: isShown ? '20%' : '2rem',
        }}
      >
        <HistoryBtn onClick={handleClick} data-cy="open-history">
          {isShown ? <i className="fa-solid fa-chevron-right" /> : <i className="fa-solid fa-chevron-left" />}
        </HistoryBtn>
        <HistoryCC isShown={isShown} />
      </PanelWrapper>
    );
  }
}

export default ControlPanelCC;
