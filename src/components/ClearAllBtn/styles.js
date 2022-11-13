import styled from 'styled-components';
import {
  SETTINGS_BTN_WIDTH,
  SETTINGS_BTN_HEIGHT,
  BORDER_SIZE_STYLE,
  BTN_BORDER_RADIUS,
  BTN_FONT_SIZE,
} from '@constants/StyleConstants';

const DeleteBtn = styled.div`
  width: ${SETTINGS_BTN_WIDTH};
  height: ${SETTINGS_BTN_HEIGHT};
  text-align: center;
  font-size: ${BTN_FONT_SIZE};
  border-radius: ${BTN_BORDER_RADIUS};
  border: ${BORDER_SIZE_STYLE} ${({ theme }) => theme.btnBorder};
  cursor: pointer;
  background-color: ${({ theme }) => theme.btnBackground};
  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
  }
`;

export default DeleteBtn;
