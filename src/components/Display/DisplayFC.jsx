import React from 'react';
import styled from 'styled-components';

const DisplayWrapper = styled.div`
    height: 13%;
    padding: 15px;
    text-align: right;
    border-bottom: 2px solid #717171;
`;
const DisplayText = styled.p`
    font-size: 2rem;
    font-weight: 500;
`;

const DisplayFC = () => {
    return (
        <DisplayWrapper>
            <DisplayText>1235+10</DisplayText>
        </DisplayWrapper>
    );
};

export default DisplayFC;
