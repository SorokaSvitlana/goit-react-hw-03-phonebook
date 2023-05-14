import React, { Component } from "react";
import { Form } from "./FormAddContacts/FormAddContacts";
import { nanoid } from 'nanoid';
import { ContactList } from "./Contacts/Contacts";
import { Search } from "./Search/Search";
import { Container, Title, ListTitle } from './Container/Container.Styled'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isNameExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  
    if (isNameExists) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      name: '',
      number: '',
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return ( <Container>
      <Title>Phonebook</Title>
<Form name={this.state.name}
number={this.state.number}
handleInputChange={this.handleInputChange}
handleSubmit={this.handleSubmit}></Form>
<ListTitle>Contacts</ListTitle>
<Search filter= {this.state.filter} handleFilterChange = {this.handleFilterChange}></Search>
<ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact}> </ContactList> 
    </Container> ) 
    } }