import React from 'react';
import { useSelector } from 'react-redux';
import {
    HistoryWrapper,
    Heading,
    Expression,
    ExpressionsWrapper,
} from './HistoryStyles.js';

const HistoryFC = () => {
    const history = useSelector((store) => store.history.history);
    return (
        <HistoryWrapper>
            <Heading>History</Heading>
            <ExpressionsWrapper>
                {history.map((expr, index) => {
                    return (
                        <Expression key={`${expr}_${index}`}>{expr}</Expression>
                    );
                })}
            </ExpressionsWrapper>
        </HistoryWrapper>
    );
};

export default HistoryFC;
