import React from 'react';
import { DeleteBtn } from './DeleteBtnStyles';
import { clearHistory } from '@store/actions/CalculatorActions';
import { useDispatch } from 'react-redux';

const DeleteHistoryBtn = () => {
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(clearHistory());
    };

    return <DeleteBtn onClick={clickHandler}>Delete History</DeleteBtn>;
};

export default DeleteHistoryBtn;
