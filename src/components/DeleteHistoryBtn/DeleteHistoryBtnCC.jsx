import React from 'react';
import { DeleteBtn } from './DeleteBtnStyles';
import { clearHistory } from '@store/actions/CalculatorActions';
import { connect } from 'react-redux';

class DeleteHistoryBtn extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        this.props.dispatch(clearHistory());
    }
    render() {
        return (
            <DeleteBtn data-cy='delete-history' onClick={this.clickHandler}>
                Clear
            </DeleteBtn>
        );
    }
}

export default connect()(DeleteHistoryBtn);
