import React, { useState } from 'react';
import HistoryFC from '@components/History/HistoryFC';
import { PanelWrapper, HistoryBtn } from './ControlPanelStyles';

const ControlPanelFC = () => {
    const [isShown, seIsShown] = useState(false);
    const handleClick = () => {
        seIsShown((current) => !current);
    };
    return (
        <PanelWrapper
            style={{
                width: isShown ? '20%' : '2rem',
            }}
        >
            <HistoryBtn onClick={handleClick}>
                {isShown ? (
                    <i className='fa-solid fa-chevron-right'></i>
                ) : (
                    <i className='fa-solid fa-chevron-left'></i>
                )}
            </HistoryBtn>
            <HistoryFC isShown={isShown} />
        </PanelWrapper>
    );
};

export default ControlPanelFC;
