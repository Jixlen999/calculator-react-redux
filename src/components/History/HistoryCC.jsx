import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteHistoryBtn from '@components/DeleteHistoryBtn/DeleteHistoryBtn';
import {
    HistoryWrapper,
    Heading,
    Expression,
    ExpressionsWrapper,
} from './HistoryStyles.js';

class HistoryCC extends React.Component {
    render() {
        return (
            <HistoryWrapper
                style={{
                    display: this.props.isShown ? 'block' : 'none',
                }}
            >
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
                <DeleteHistoryBtn />
            </HistoryWrapper>
        );
    }
}

HistoryCC.propTypes = {
    isShown: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({ history: state.history.history });

export default connect(mapStateToProps)(HistoryCC);
