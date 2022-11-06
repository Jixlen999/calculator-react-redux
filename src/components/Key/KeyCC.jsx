import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clickHandler from '@utils/keyClickHandler';
import { KeyWrapper } from './KeyStyles';

class KeyCC extends React.Component {
    render() {
        const { element, screenValue, answer, dispatch } = this.props;
        return (
            <KeyWrapper
                onClick={() =>
                    clickHandler(element, dispatch, screenValue, answer)
                }
            >
                {element}
            </KeyWrapper>
        );
    }
}

KeyCC.propTypes = {
    element: PropTypes.string.isRequired,
    screenValue: PropTypes.string.isRequired,
    answer: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
};

const mapStateToProps = (state) => ({
    screenValue: state.calculator.num,
    answer: state.calculator.answer,
});

export default connect(mapStateToProps)(KeyCC);
