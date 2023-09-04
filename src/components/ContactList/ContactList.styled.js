import { styled } from 'styled-components';

export const ListLable = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListInput = styled.input`
  width: 230px;
  height: 22px;
  border: solid 1px gray;
  border-radius: 5px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding-top: 8px;
`;

export const List = styled.ul`
  padding: 0 40px 0 0;
`;

export const ListBtn = styled.button`
  width: 90px;
  padding: 2px;
  border: solid 1px gray;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4287f5;
  }
`;
