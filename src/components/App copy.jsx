import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Container } from './app.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    number: '',
    name: '',
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('updated-contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        'updated-contacts',
        JSON.stringify(this.state.contacts)
      );
      console.log('set contact to storage');
    }
  }

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.some(
        value => value.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(oldState => ({
      contacts: [
        ...oldState.contacts,
        {
          id: nanoid(),
          name: name,
          number: number,
        },
      ],
    }));
    console.log('add contact');
  };

  onChangeInput = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactList
          list={filteredContacts}
          filter={filter}
          onChangeInput={this.onChangeInput}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
