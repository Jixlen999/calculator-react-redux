import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
    HistoryWrapper,
    Heading,
    Expression,
    ExpressionsWrapper,
} from './HistoryStyles.js';

const HistoryFC = ({ isShown }) => {
    const history = useSelector((store) => store.history.history);
    return (
        <HistoryWrapper
            style={{
                display: isShown ? 'block' : 'none',
            }}
        >
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

HistoryFC.propTypes = {
    isShown: PropTypes.bool.isRequired,
};

export default HistoryFC;
