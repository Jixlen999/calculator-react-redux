import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NAVLINK_COLOR } from '@constants/Theme';
import { NAVLINK_BORDER_HOVER_ACTIVE, NAVLINK_COLOR_HOVER_ACTIVE } from '@constants/StyleConstants';

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const NavbarLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: ${NAVLINK_COLOR};
  &:hover,
  &.active {
    color: ${NAVLINK_COLOR_HOVER_ACTIVE};
    border-bottom: ${NAVLINK_BORDER_HOVER_ACTIVE};
  }
`;
