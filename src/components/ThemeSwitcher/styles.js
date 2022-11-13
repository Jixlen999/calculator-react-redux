import styled from 'styled-components';
import {
  BTN_FONT_SIZE,
  SETTINGS_BTN_WIDTH,
  BTN_BORDER_RADIUS,
  BORDER_SIZE_STYLE,
  SETTINGS_BTN_HEIGHT,
} from '@constants/StyleConstants';

export const SwitcherWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Select = styled.select`
  width: ${SETTINGS_BTN_WIDTH};
  height: ${SETTINGS_BTN_HEIGHT};
  background-color: ${({ theme }) => theme.btnBackground};
  color: ${({ theme }) => theme.mainTextColor};
  text-align: center;
  font-size: ${BTN_FONT_SIZE};
  border-radius: ${BTN_BORDER_RADIUS};
  border: ${BORDER_SIZE_STYLE} ${({ theme }) => theme.btnBorder};
  cursor: pointer;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.mainTextColor};
  font-size: 20px;
`;
