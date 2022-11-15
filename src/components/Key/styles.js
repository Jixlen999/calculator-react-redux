import styled from 'styled-components';
import theme from '@src/theme';

const KeyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.width[1]}vw;
  height: ${theme.height[0]}vh;
  font-size: ${theme.fontSize[4]}px;
  color: ${theme.MAIN_TEXT_COLOR};
  text-align: center;
  font-weight: ${theme.fontWeight[1]};
  border-radius: ${theme.borderRadius[0]}px;
  border: ${theme.borderSize[1]}px solid ${theme.BTN_BORDER};
  background-color: ${theme.BTN_BG_COLOR};
  cursor: pointer;
  &:hover {
    background-color: ${theme.BTN_BG_COLOR_HOVER};
  }
`;

export default KeyWrapper;
