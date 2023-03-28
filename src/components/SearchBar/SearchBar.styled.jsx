import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 40px 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;
`;
export const StyledLabel = styled.label`
  color: #a5f1e9;
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 15px;
`;
export const StyledInput = styled.input`
  margin-top: 8px;
  margin-bottom: 25px;
  height: 40px;
  width: 500px;
  background: transparent;
  outline: none;
  border: 1px solid rgb(220, 231, 255);
  border-radius: 30px;
  font-size: 18px;
  color: rgb(220, 231, 255);
  padding-left: 10px;
`;
export const SearchButon = styled.button`
  margin-bottom: 15px;
  color: rgb(220, 231, 255);
  background: #283657;
  border: none;
  width: 200px;
  height: 40px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 16px;
  transition-property: background-color color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #a5f1e9;
    color: #144272;
  }
`;
