import styled from 'styled-components';

export const Photo = styled.img`
  width: 160px;
  display: block;
`;

export const PhotoList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;
  list-style: none;
`;
export const Actor = styled.li`
  background-color: #3c84ab;
  border-radius: 30px;
`;

export const Name = styled.h3`
  max-width: 160px;
  color: #0a2647;
  font-size: 18px;
  text-align: center;
  font-weight: 300;
  margin-top: 8px;
`;

export const Role = styled.p`
  max-width: 160px;
  color: white;
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  margin-bottom: 10px;
`;

export const Error = styled.p`
  color: #fff;
  font-size: 26px;
  text-align: center;
  font-weight: 300;
  margin-top: 20px;
  margin-bottom: 20px;
`;
