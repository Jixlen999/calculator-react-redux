import styled from 'styled-components';
import { SETTINGS_BTN_HEIGHT, BORDER_SIZE_STYLE, BTN_BORDER_RADIUS, BTN_FONT_SIZE } from '@constants/StyleConstants';
import { BTN_BORDER, BTN_BG_COLOR, BTN_BG_COLOR_HOVER } from '@constants/Theme';

const DeleteBtn = styled.div`
  width: ${(props) => props.width};
  height: ${SETTINGS_BTN_HEIGHT};
  text-align: center;
  font-size: ${BTN_FONT_SIZE};
  border-radius: ${BTN_BORDER_RADIUS};
  border: ${BORDER_SIZE_STYLE} ${BTN_BORDER};
  cursor: pointer;
  background-color: ${BTN_BG_COLOR};
  &:hover {
    background-color: ${BTN_BG_COLOR_HOVER};
  }
`;

export default DeleteBtn;
