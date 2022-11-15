import React from 'react';
import PropTypes from 'prop-types';
import LayoutWrapper from './styles';

function Layout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(Layout);
