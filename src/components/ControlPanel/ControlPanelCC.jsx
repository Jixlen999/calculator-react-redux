import React from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import HistoryCC from '@components/History/HistoryCC';
import { PanelWrapper, HistoryBtn } from './styles';

class ControlPanelCC extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  componentDidMount() {
    this.setState({ isShown: localStorage.getItem('isShown') !== 'false' });
  }

  render() {
    const { isShown } = this.state;

    const handleClick = () => {
      localStorage.setItem('isShown', !isShown);
      this.setState((prevState) => ({ isShown: !prevState.isShown }));
    };
    return (
      <PanelWrapper isShown={isShown}>
        <HistoryBtn onClick={handleClick} data-cy="open-history">
          {isShown ? <SlArrowRight /> : <SlArrowLeft />}
        </HistoryBtn>
        <HistoryCC isShown={isShown} />
      </PanelWrapper>
    );
  }
}

export default ControlPanelCC;
