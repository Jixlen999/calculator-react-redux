import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '@src/theme';

const { gap, navlinkColorHoverActive, white, borderSize, navLinkColor } = theme;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${gap[1]}px;
`;

export const NavbarLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: ${navLinkColor};
  &:hover,
  &.active {
    color: ${navlinkColorHoverActive};
    border-bottom: ${borderSize[0]}px solid ${white};
  }
`;
