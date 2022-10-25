import React from 'react';
import PropTypes from 'prop-types';
import { KeyWrapper } from './KeyStyles';

const KeyFC = ({ element }) => {
    return <KeyWrapper>{element}</KeyWrapper>;
};

KeyFC.propTypes = {
    element: PropTypes.string.isRequired,
};

export default KeyFC;
