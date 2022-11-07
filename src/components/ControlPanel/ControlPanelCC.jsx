import React from 'react';
import HistoryCC from '@components/History/HistoryCC';
import { PanelWrapper, HistoryBtn } from './ControlPanelStyles';

class ControlPanelCC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState((prevState) => ({ isShown: !prevState.isShown }));
    }

    render() {
        return (
            <PanelWrapper
                style={{
                    width: this.state.isShown ? '20%' : '2rem',
                }}
            >
                <HistoryBtn onClick={this.handleClick}>
                    {this.state.isShown ? (
                        <i className='fa-solid fa-chevron-right'></i>
                    ) : (
                        <i className='fa-solid fa-chevron-left'></i>
                    )}
                </HistoryBtn>
                <HistoryCC isShown={this.state.isShown} />
            </PanelWrapper>
        );
    }
}

export default ControlPanelCC;
