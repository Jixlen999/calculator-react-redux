import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '@store/actions/CalculatorActions';
import PropTypes from 'prop-types';
import ClearButton from '@components/ClearButton';

import { HistoryWrapper, Heading, Expression, ExpressionsWrapper } from './styles';

function HistoryFC({ isShown }) {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(clearHistory());
  };

  const history = useSelector((store) => store.history.history);
  return (
    <HistoryWrapper isShown={isShown}>
      <Heading>History</Heading>
      <ExpressionsWrapper data-cy="history">
        {history.map((expr, index) => (
          <Expression key={`${expr}_${index}`}>{expr}</Expression>
        ))}
      </ExpressionsWrapper>
      <ClearButton clickHandler={clickHandler} dataCy="delete-history">
        Clear
      </ClearButton>
    </HistoryWrapper>
  );
}

HistoryFC.propTypes = {
  isShown: PropTypes.bool.isRequired,
};

export default React.memo(HistoryFC);
