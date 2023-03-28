import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.header`
  background-color: #0a2647;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;
export const NavListItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  color: #a5f1e9;
  text-transform: uppercase;
  &.active {
    font-size: 22px;
    color: #ff9e56;
    text-transform: uppercase;
  }
`;
