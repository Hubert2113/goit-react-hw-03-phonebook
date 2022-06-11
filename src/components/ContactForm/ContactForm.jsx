import PropTypes from 'prop-types';
import { Form, FormSubmitBtn } from './ContactForm.styles';

export const ContactFrom = ({
  name,
  number,
  handleChangeName,
  handleChangeNumber,
  handleSubmit,
}) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChangeName}
          id="name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          onChange={handleChangeNumber}
          id="number"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <FormSubmitBtn type="submit">Add contact</FormSubmitBtn>
      </Form>
    </>
  );
};

ContactFrom.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func,
  handleChangeNumber: PropTypes.func,
  handleSubmit: PropTypes.func,
}