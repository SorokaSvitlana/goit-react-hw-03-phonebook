import PropTypes from 'prop-types'
import { FormAdd, Label, Input, Button} from './Form.Styled'
export const Form = ({name, number, handleSubmit, handleInputChange}) => { return (
    <FormAdd onSubmit={handleSubmit} onChange={handleInputChange}>
    <Label>
      Name:
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
    <Label>
      Number:
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Label>
    <Button type="submit">Add contact</Button>
  </FormAdd> )
   }

   Form.propTypes = {
    name: PropTypes.string, 
    number: PropTypes.string, 
    handleSubmit: PropTypes.func, 
    handleInputChange: PropTypes.func, 
  }