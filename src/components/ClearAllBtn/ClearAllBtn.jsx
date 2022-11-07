import React from 'react';
import { DeleteBtn } from './ClearAllBtnStyles';
import { clearHistory, loadC } from '@store/actions/CalculatorActions';
import { useDispatch } from 'react-redux';

const ClearAllBtn = () => {
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(clearHistory());
        dispatch(loadC());
    };

    return (
        <DeleteBtn onClick={clickHandler} data-cy='clear-all'>
            Clear All
        </DeleteBtn>
    );
};

export default ClearAllBtn;
