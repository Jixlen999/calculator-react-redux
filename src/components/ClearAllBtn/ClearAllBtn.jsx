import React from 'react';
import { useDispatch } from 'react-redux';
import { clearHistory, loadC } from '@store/actions/CalculatorActions';
import DeleteBtn from './styles';

function ClearAllBtn() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(clearHistory());
    dispatch(loadC());
  };

  return (
    <DeleteBtn onClick={clickHandler} data-cy="clear-all">
      Clear All
    </DeleteBtn>
  );
}

export default ClearAllBtn;
