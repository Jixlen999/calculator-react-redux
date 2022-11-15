import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteHistoryBtnCC from '@components/DeleteHistoryBtn/DeleteHistoryBtnCC';
import { HistoryWrapper, Heading, Expression, ExpressionsWrapper } from './styles';

class HistoryCC extends React.PureComponent {
  render() {
    const { isShown, history } = this.props;
    return (
      <HistoryWrapper isShown={isShown}>
        <Heading>History</Heading>
        <ExpressionsWrapper data-cy="history">
          {history.map((expr, index) => (
            <Expression key={`${expr}_${index}`}>{expr}</Expression>
          ))}
        </ExpressionsWrapper>
        <DeleteHistoryBtnCC />
      </HistoryWrapper>
    );
  }
}

HistoryCC.propTypes = {
  isShown: PropTypes.bool.isRequired,
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({ history: state.history.history });

export default connect(mapStateToProps)(HistoryCC);
