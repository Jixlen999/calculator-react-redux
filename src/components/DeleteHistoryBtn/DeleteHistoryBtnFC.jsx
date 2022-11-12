import React from 'react';
import { useDispatch } from 'react-redux';
import { clearHistory } from '@store/actions/CalculatorActions';
import DeleteBtn from './styles';

function DeleteHistoryBtnFC() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(clearHistory());
  };

  return (
    <DeleteBtn data-cy="delete-history" onClick={clickHandler}>
      Clear
    </DeleteBtn>
  );
}

export default DeleteHistoryBtnFC;
