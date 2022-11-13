import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NAVLINK_COLOR } from '@constants/Theme';

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
    color: #ececec;
    border-bottom: 1.5px solid white;
  }
`;
