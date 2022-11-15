import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '@src/theme';

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.gap[1]}px;
`;

export const NavbarLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: ${theme.NAVLINK_COLOR};
  &:hover,
  &.active {
    color: ${theme.navlinkColorHoverActive};
    border-bottom: ${theme.borderSize[0]}px solid ${theme.white};
  }
`;
