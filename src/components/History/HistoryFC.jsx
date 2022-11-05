import React from 'react';
import { useSelector } from 'react-redux';
import { HistoryWrapper } from './HistoryStyles.js';

const HistoryFC = () => {
    const history = useSelector((store) => store.history.history);
    return (
        <HistoryWrapper>
            <h2>History</h2>
            <div>
                {history.map((expr, index) => {
                    return <p key={`${expr}_${index}`}>{expr}</p>;
                })}
            </div>
        </HistoryWrapper>
    );
};

export default HistoryFC;
