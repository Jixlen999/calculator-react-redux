import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteHistoryBtnFC from '@components/DeleteHistoryBtn/DeleteHistoryBtnFC';
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
                visibility: isShown ? 'visible' : 'hidden',
            }}
        >
            <Heading>History</Heading>
            <ExpressionsWrapper data-cy='history'>
                {history.map((expr, index) => {
                    return (
                        <Expression key={`${expr}_${index}`}>{expr}</Expression>
                    );
                })}
            </ExpressionsWrapper>
            <DeleteHistoryBtnFC />
        </HistoryWrapper>
    );
};

HistoryFC.propTypes = {
    isShown: PropTypes.bool.isRequired,
};

export default HistoryFC;
