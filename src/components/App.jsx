import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Container } from './app.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('updated-contacts');
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('updated-contacts');
  //   if (savedContacts !== null) {
  //     setContacts(JSON.parse(savedContacts));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('updated-contacts', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidUpdate(prevProp, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  // localStorage.setItem(
  //   'updated-contacts',
  //   JSON.stringify(this.state.contacts)
  // );
  //     console.log('set contact to storage');
  //   }
  // }

  const addContact = ({ name, number }) => {
    if (
      contacts.some(value => value.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts([
      ...contacts,
      {
        id: nanoid(),
        name: name,
        number: number,
      },
    ]);
    console.log('add contact');
  };

  const onChangeInput = evt => {
    const { value } = evt.target;

    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <ContactList
        list={filteredContacts}
        filter={filter}
        onChangeInput={onChangeInput}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};
