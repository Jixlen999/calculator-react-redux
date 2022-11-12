import React from 'react';
import PropTypes from 'prop-types';
import ErrorWrapper from './styles';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <ErrorWrapper>
          <h1>Something went wrong...</h1>
        </ErrorWrapper>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = PropTypes.node.isRequired;

export default ErrorBoundary;
