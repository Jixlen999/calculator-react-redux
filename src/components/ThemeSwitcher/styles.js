import styled from 'styled-components';
import {
  BTN_FONT_SIZE,
  SETTINGS_BTN_WIDTH,
  BTN_BORDER_RADIUS,
  BORDER_SIZE_STYLE,
  SETTINGS_BTN_HEIGHT,
  TWENTY_PX_MARGIN,
} from '@constants/StyleConstants';
import { BTN_BG_COLOR, MAIN_TEXT_COLOR, BTN_BORDER } from '@constants/Theme';

export const SwitcherWrapper = styled.div`
  margin-bottom: ${TWENTY_PX_MARGIN};
`;

export const Select = styled.select`
  width: ${SETTINGS_BTN_WIDTH};
  height: ${SETTINGS_BTN_HEIGHT};
  background-color: ${BTN_BG_COLOR};
  color: ${MAIN_TEXT_COLOR};
  text-align: center;
  font-size: ${BTN_FONT_SIZE};
  border-radius: ${BTN_BORDER_RADIUS};
  border: ${BORDER_SIZE_STYLE} ${BTN_BORDER};
  cursor: pointer;
`;

export const Text = styled.p`
  color: ${MAIN_TEXT_COLOR};
  font-size: 20px;
`;
