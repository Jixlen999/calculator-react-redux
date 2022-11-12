import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clickHandler from '@utils/keyClickHandler';
import KeyWrapper from './styles';

class KeyCC extends React.PureComponent {
  render() {
    const { element, screenValue, answer, dispatch } = this.props;
    const handleClick = () => {
      clickHandler(element, dispatch, screenValue, answer);
    };
    return (
      <KeyWrapper data-cy={`key-${element}`} onClick={handleClick}>
        {element}
      </KeyWrapper>
    );
  }
}

KeyCC.propTypes = {
  element: PropTypes.string.isRequired,
  screenValue: PropTypes.string.isRequired,
  answer: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  screenValue: state.calculator.num,
  answer: state.calculator.answer,
});

export default connect(mapStateToProps)(KeyCC);
