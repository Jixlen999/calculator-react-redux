import styled from 'styled-components';
import theme from '@src/theme';

export const HeaderWrapper = styled.div`
  height: ${theme.height[0]}vh;
  width: ${theme.width[3]}%;
  padding: ${theme.padding[1]}px;
  background-color: ${theme.HEADER_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSize[3]}px;
  font-weight: ${theme.fontWeight[0]};
`;

export const Logo = styled.h1`
  font-size: ${theme.fontSize[3]}px;
  font-weight: ${theme.fontWeight[0]};
  color: ${theme.navlinkColorHoverActive};
`;
