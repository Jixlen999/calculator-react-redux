import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { DisplayWrapper, DisplayText, ExpressionText } from './styles';

function DisplayFC() {
  const screenValue = useSelector((state) => state.calculator.num);
  const calcResult = useSelector((state) => state.calculator.answer);
  const lastExpression = useSelector((store) => store.history.lastExpression);
  const scrValue = useMemo(() => (screenValue === '' ? 0 : screenValue), [screenValue]);
  return (
    <DisplayWrapper>
      <ExpressionText>
        {/* Если результат еще не подсчитан, или его значение не валидно,
         то последнее выражение над результатом не выводится */}
        {calcResult === '' || calcResult === 'Invalid input' || calcResult === 'Division by zero error'
          ? ''
          : lastExpression}
      </ExpressionText>
      <DisplayText data-cy="display">{calcResult === '' ? scrValue : calcResult}</DisplayText>
    </DisplayWrapper>
  );
}

export default React.memo(DisplayFC);
