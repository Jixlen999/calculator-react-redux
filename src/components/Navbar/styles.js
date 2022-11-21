import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap[1]}px;
`;

export const NavbarLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.navLinkColor};
  &:hover,
  &.active {
    color: ${({ theme }) => theme.navlinkColorHoverActive};
    border-bottom: ${({ theme }) => theme.borderSize[0]}px solid ${({ theme }) => theme.white};
  }
`;
