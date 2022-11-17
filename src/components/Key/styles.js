import styled from 'styled-components';
import theme from '@src/theme';

const {
  width,
  height,
  fontSize,
  fontWeight,
  borderRadius,
  borderSize,
  btnBgColor,
  btnBorder,
  mainTextColor,
  btnBgColorHover,
} = theme;

const KeyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${width[1]}vw;
  height: ${height[0]}vh;
  font-size: ${fontSize[4]}px;
  color: ${mainTextColor};
  text-align: center;
  font-weight: ${fontWeight[1]};
  border-radius: ${borderRadius[0]}px;
  border: ${borderSize[1]}px solid ${btnBorder};
  background-color: ${btnBgColor};
  cursor: pointer;
  &:hover {
    background-color: ${btnBgColorHover};
  }
`;

export default KeyWrapper;
