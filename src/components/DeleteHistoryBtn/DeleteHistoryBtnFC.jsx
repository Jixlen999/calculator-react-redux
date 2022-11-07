import React from 'react';
import { DeleteBtn } from './DeleteBtnStyles';
import { clearHistory } from '@store/actions/CalculatorActions';
import { useDispatch } from 'react-redux';

const DeleteHistoryBtnFC = () => {
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(clearHistory());
    };

    return (
        <DeleteBtn data-cy='delete-history' onClick={clickHandler}>
            Clear
        </DeleteBtn>
    );
};

export default DeleteHistoryBtnFC;
