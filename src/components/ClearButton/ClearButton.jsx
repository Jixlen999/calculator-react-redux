import React from 'react';
import PropTypes from 'prop-types';
import DeleteBtn from './styles';

function ClearButton({ clickHandler, dataCy, children, width }) {
  return (
    <DeleteBtn onClick={clickHandler} data-cy={dataCy} width={width}>
      {children}
    </DeleteBtn>
  );
}

ClearButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  dataCy: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
ClearButton.defaultProps = {
  width: 'auto',
};

export default ClearButton;
