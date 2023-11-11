import React from 'react';
import {
  List,
  ListBtn,
  ListInput,
  ListItem,
  ListLable,
} from './ContactList.styled';

const ContactList = ({ list, onChangeInput, filter, onDeleteContact }) => {
  return (
    <div>
      <ListLable>
        Find contacts by name{' '}
        <ListInput
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeInput}
        />
      </ListLable>
      <List>
        {list.map(item => (
          <ListItem key={item.id}>
            <div>
              <span>{item.name}:</span>
              <span>{item.number}</span>
            </div>
            <ListBtn onClick={() => onDeleteContact(item.id)}>Delete</ListBtn>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ContactList;
