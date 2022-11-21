import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: ${({ theme }) => theme.height[0]}vh;
  width: ${({ theme }) => theme.width[3]}%;
  padding: ${({ theme }) => theme.padding[1]}px;
  background-color: ${({ theme }) => theme.headerColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize[3]}px;
  font-weight: ${({ theme }) => theme.fontWeight[0]};
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[3]}px;
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  color: ${({ theme }) => theme.navlinkColorHoverActive};
`;
