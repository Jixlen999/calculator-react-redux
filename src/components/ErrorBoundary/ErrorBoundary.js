import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
    text-align: center;
    margin-top: 5%;
`;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorWrapper>
                    <h1>Something went wrong...</h1>
                </ErrorWrapper>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
