import React from 'react';
import { useSelector } from 'react-redux';
import { DisplayWrapper, DisplayText, ExpressionText } from './DisplayStyles';

const DisplayFC = () => {
    const screenValue = useSelector((state) => state.calculator.num);
    const calcResult = useSelector((state) => state.calculator.answer);
    const lastExpression = useSelector((store) => store.history.lastExpression);
    return (
        <DisplayWrapper>
            <ExpressionText>
                {/* Если результат еще не подсчитан, или его значение не
                валидно, то последнее выражение над результатом не выводится */}
                {calcResult === '' || calcResult === 'Invalid input'
                    ? ''
                    : lastExpression}
            </ExpressionText>
            <DisplayText>
                {calcResult === ''
                    ? screenValue === ''
                        ? 0
                        : screenValue
                    : calcResult}
            </DisplayText>
        </DisplayWrapper>
    );
};

export default React.memo(DisplayFC);
