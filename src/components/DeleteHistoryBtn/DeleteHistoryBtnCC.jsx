import React from 'react';
import { connect } from 'react-redux';
import { clearHistory } from '@store/actions/CalculatorActions';
import DeleteBtn from './styles';

class DeleteHistoryBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  clickHandler = () => {
    this.props.dispatch(clearHistory());
  };
  render() {
    return (
      <DeleteBtn data-cy="delete-history" onClick={this.clickHandler}>
        Clear
      </DeleteBtn>
    );
  }
}

export default connect()(DeleteHistoryBtn);
