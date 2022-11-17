import styled from 'styled-components';
import theme from '@src/theme';

const { height, width, padding, fontSize, fontWeight, navlinkColorHoverActive, headerColor } = theme;

export const HeaderWrapper = styled.div`
  height: ${height[0]}vh;
  width: ${width[3]}%;
  padding: ${padding[1]}px;
  background-color: ${headerColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize[3]}px;
  font-weight: ${fontWeight[0]};
`;

export const Logo = styled.h1`
  font-size: ${fontSize[3]}px;
  font-weight: ${fontWeight[0]};
  color: ${navlinkColorHoverActive};
`;
