import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import clickHandler from '@utils/keyClickHandler';

import { useDispatch, useSelector } from 'react-redux';
import KeyWrapper from './styles';

function KeyFC({ element }) {
  const dispatch = useDispatch();
  const screenValue = useSelector((state) => state.calculator.num);
  const answer = useSelector((state) => state.calculator.answer);

  const handleClick = useCallback(() => {
    clickHandler(element, dispatch, screenValue, answer);
  }, [element, dispatch, screenValue, answer]);

  return (
    <KeyWrapper data-cy={`key-${element}`} onClick={handleClick}>
      {element}
    </KeyWrapper>
  );
}

KeyFC.propTypes = {
  element: PropTypes.string.isRequired,
};

export default React.memo(KeyFC);
