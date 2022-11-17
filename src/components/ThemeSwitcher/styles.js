import styled from 'styled-components';
import theme from '@src/theme';

const { margin, width, height, fontSize, borderRadius, borderSize, btnBgColor, mainTextColor, btnBorder } = theme;

export const SwitcherWrapper = styled.div`
  margin-bottom: ${margin[2]}px;
`;

export const Select = styled.select`
  width: ${width[4]}px;
  height: ${height[2]}px;
  background-color: ${btnBgColor};
  color: ${mainTextColor};
  text-align: center;
  font-size: ${fontSize[4]}px;
  border-radius: ${borderRadius[0]}px;
  border: ${borderSize[1]}px solid ${btnBorder};
  cursor: pointer;
`;

export const Text = styled.p`
  color: ${mainTextColor};
  font-size: ${fontSize[1]};
`;
