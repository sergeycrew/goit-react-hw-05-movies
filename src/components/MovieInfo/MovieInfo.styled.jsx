import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 5px 20px;
  color: rgb(220, 231, 255);
  text-decoration: none;
  border-radius: 30px;
  background: #0a2647;
  border: none;
  width: 100px;
  height: 30px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  transition-property: background-color color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #ff9e56;
    color: black;
  }
`;
export const InfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgBox = styled.div`
  margin-right: 20px;
  margin-top: 10px;
  padding: 5px 20px 5px 5px;
`;
export const Image = styled.img`
  min-width: 240px;
  max-width: 250px;

  display: block;
  padding: 5px;
  border-radius: 20px;
`;
export const InfoText = styled.div`
  width: 100%;
`;
export const MovieName = styled.h2`
  margin-bottom: 20px;
  color: #ff9e56;
  text-transform: uppercase;
  font-weight: 600;
`;
export const Title = styled.h3`
  color: #002b5b;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 5px;
  margin-top: 10px;
`;
export const Text = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 15px;
`;
export const GenresList = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
`;
export const ListItem = styled.li``;
export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
  margin-top: 20px;
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 22px;
  color: #0a2647;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  &.active {
    font-size: 22px;
    color: #ff9e56;
    text-transform: uppercase;
  }
`;
export const SectionList = styled.div``;
