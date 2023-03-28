import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListItem = styled.li`
  list-style: none;
  background-color: #144272;
  border-radius: 30px;
  transition: transform 0.2s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    transform: scale(1.05);
    background-color: #ff9e56;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;
export const LinkItem = styled(Link)`
  text-decoration: none;
`;

export const Label = styled.h2`
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;
  max-width: 250px;
`;

export const Img = styled.img`
  width: 250px;
`;
