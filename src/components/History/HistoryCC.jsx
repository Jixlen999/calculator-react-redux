import React from 'react';
import { connect } from 'react-redux';
import {
    HistoryWrapper,
    Heading,
    Expression,
    ExpressionsWrapper,
} from './HistoryStyles.js';

class HistoryCC extends React.Component {
    render() {
        return (
            <HistoryWrapper>
                <Heading>History</Heading>
                <ExpressionsWrapper>
                    {this.props.history.map((expr, index) => {
                        return (
                            <Expression key={`${expr}_${index}`}>
                                {expr}
                            </Expression>
                        );
                    })}
                </ExpressionsWrapper>
            </HistoryWrapper>
        );
    }
}

const mapStateToProps = (state) => ({ history: state.history.history });

export default connect(mapStateToProps)(HistoryCC);
