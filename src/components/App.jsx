import { Component } from 'react';
import { Section } from './Section/Section';
import { ContactFrom } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChangeName = ev => {
    this.setState({ name: ev.target.value });
  };

  handleChangeNumber = ev => {
    this.setState({ number: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      alert(`${this.state.name} is already in contacts.`);
    } else {
      this.setState({
        contacts: [
          ...this.state.contacts,
          {
            name: this.state.name,
            number: this.state.number,
            id: nanoid(),
          },
        ],
      });
    }
  };

  deleteContact = ev => {
    const newContacts = this.state.contacts.filter((contact) => contact.id !== ev.target.parentNode.id);
    this.setState({ contacts: newContacts });
  }

  handleChangeFilter = ev => {
    this.setState({ filter: ev.target.value });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactFrom
            name={this.state.name}
            number={this.state.number}
            handleChangeName={this.handleChangeName}
            handleChangeNumber={this.handleChangeNumber}
            handleSubmit={this.handleSubmit}
          />
        </Section>
        <Section title="Contacts">
          <Filter
            filter={this.state.filter}
            contacts={this.state.contacts}
            handleChangeFilter={this.handleChangeFilter}
          />
          <ContactList
            filter={this.state.filter}
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
