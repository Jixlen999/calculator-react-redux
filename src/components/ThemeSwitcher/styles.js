import styled from 'styled-components';
import theme from '@src/theme';

export const SwitcherWrapper = styled.div`
  margin-bottom: ${theme.margin[2]}px;
`;

export const Select = styled.select`
  width: ${theme.width[4]}px;
  height: ${theme.height[2]}px;
  background-color: ${theme.BTN_BG_COLOR};
  color: ${theme.MAIN_TEXT_COLOR};
  text-align: center;
  font-size: ${theme.fontSize[4]}px;
  border-radius: ${theme.borderRadius[0]}px;
  border: ${theme.borderSize[1]}px solid ${theme.BTN_BORDER};
  cursor: pointer;
`;

export const Text = styled.p`
  color: ${theme.MAIN_TEXT_COLOR};
  font-size: ${theme.fontSize[1]};
`;
