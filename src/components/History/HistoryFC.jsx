import React from 'react';
import styled from 'styled-components';

const HistoryWrapper = styled.div`
    width: 20%;
    padding-left: 15px;
    font-size: 0.9rem;
    text-align: center;
`;

const HistoryFC = () => {
    return (
        <HistoryWrapper>
            <h2>History</h2>
        </HistoryWrapper>
    );
};

export default HistoryFC;
