import React from 'react';
import PropTypes from 'prop-types';
import DeleteBtn from './styles';

function ClearButtonFC({ clickHandler, dataCy, children, width }) {
  return (
    <DeleteBtn onClick={clickHandler} data-cy={dataCy} width={width}>
      {children}
    </DeleteBtn>
  );
}

ClearButtonFC.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  dataCy: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
ClearButtonFC.defaultProps = {
  width: 'auto',
};

export default ClearButtonFC;
