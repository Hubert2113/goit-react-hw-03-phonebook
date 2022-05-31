import { nanoid } from "nanoid";
import { Component } from "react";
import {
  Form,
  FormSubmitBtn,
} from './Form.styles';
import { Section } from "./Section/Section";

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  }

  handleChangeName = (ev) => {
    this.setState({name: ev.target.value});
  }

  handleChangeNumber = (ev) => {
    this.setState({number: ev.target.value});
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({contacts: [...this.state.contacts, {
      name: this.state.name,
      number: this.state.number,
    }]});
  }

  render(){
    return (
      <>
        <Section title='Phonebook'>
          <Form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChangeName}
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label htmlFor="number">Number</label>
            <input
              onChange={this.handleChangeNumber}
              id="number"
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <FormSubmitBtn type="submit">Add contact</FormSubmitBtn>
          </Form>
        </Section>
        <Section title='Contacts'>
          <label htmlFor=""></label>
          <imput

          />
          <ul>
            {this.state.contacts.map(contact => (
              <li
                name={contact}
                id={nanoid()}
                key={nanoid()}
              >{contact.name}: {contact.number}</li>
            ))}
          </ul>
        </Section>
      </>
    );
  }
}

