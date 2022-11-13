import styled from 'styled-components';
import { HUNDRED_PERCENT_WIDTH, KEYPAD_WRAPPER_PADDING } from '@constants/StyleConstants';

export const KeypadWrapper = styled.div`
  width: ${HUNDRED_PERCENT_WIDTH};
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${KEYPAD_WRAPPER_PADDING};
`;

export const Key = styled.div`
  display: flex;
  gap: 10%;
  justify-content: space-between;
  align-items: center;
`;
