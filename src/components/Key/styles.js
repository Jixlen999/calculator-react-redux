import styled from 'styled-components';
import { BORDER_SIZE_STYLE, BTN_BORDER_RADIUS, BTN_FONT_SIZE } from '@constants/StyleConstants';
import { MAIN_TEXT_COLOR, BTN_BG_COLOR, BTN_BG_COLOR_HOVER, BTN_BORDER } from '@constants/Theme';

const KeyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 10vh;
  font-size: ${BTN_FONT_SIZE};
  color: ${MAIN_TEXT_COLOR};
  text-align: center;
  font-weight: 500;
  border-radius: ${BTN_BORDER_RADIUS};
  border: ${BORDER_SIZE_STYLE} ${BTN_BORDER};
  background-color: ${BTN_BG_COLOR};
  cursor: pointer;
  &:hover {
    background-color: ${BTN_BG_COLOR_HOVER};
  }
`;

export default KeyWrapper;
