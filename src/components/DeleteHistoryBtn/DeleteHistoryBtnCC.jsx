import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearHistory } from '@store/actions/CalculatorActions';
import DeleteBtn from './styles';

class DeleteHistoryBtn extends React.PureComponent {
  render() {
    const { dispatch } = this.props;
    const clickHandler = () => {
      dispatch(clearHistory());
    };
    return (
      <DeleteBtn data-cy="delete-history" onClick={clickHandler}>
        Clear
      </DeleteBtn>
    );
  }
}

DeleteHistoryBtn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(DeleteHistoryBtn);
