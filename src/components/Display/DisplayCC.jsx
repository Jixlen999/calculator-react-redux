import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisplayWrapper, DisplayText, ExpressionText } from './styles';

class DisplayCC extends React.PureComponent {
  render() {
    const { screenValue, calcResult, lastExpression } = this.props;
    const scrValue = screenValue === '' ? 0 : screenValue;
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
}

DisplayCC.propTypes = {
  screenValue: PropTypes.string.isRequired,
  calcResult: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  lastExpression: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  screenValue: state.calculator.num,
  calcResult: state.calculator.answer,
  lastExpression: state.history.lastExpression,
});

export default connect(mapStateToProps)(DisplayCC);
