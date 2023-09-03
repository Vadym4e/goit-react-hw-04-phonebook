import React from 'react';

const ContactList = ({ list, onChangeInput, filter, onDeleteContact }) => {
  return (
    <div>
      <label>
        Find contacts by name{' '}
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeInput}
        />
      </label>
      <ul>
        {list.map(item => {
          return (
            <li key={item.id}>
              <span>{item.name}:</span>
              <span>{item.number}</span>
              <button onClick={() => onDeleteContact(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
