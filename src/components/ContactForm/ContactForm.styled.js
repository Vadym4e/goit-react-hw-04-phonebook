import styled from 'styled-components';

export const Form = styled.form`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid 2px;
  gap: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputForm = styled.input`
  width: 230px;
  height: 22px;
  border: solid 1px gray;
  border-radius: 5px;
`;

export const AddBtn = styled.button`
  width: 90px;
  padding: 2px;
  border: solid 1px gray;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4287f5;
  }
`;
