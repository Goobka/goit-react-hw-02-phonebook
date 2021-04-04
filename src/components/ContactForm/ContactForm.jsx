import { Component } from 'react';
import shortid from 'shortid';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: shortid.generate(),
  }

  id = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    })
  }


  render() {
    return (
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label>
            Name
            <input
              className={styles.input}
              key={this.id}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              className={styles.input}
              key={this.id}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </label>
        <button type="submit" className={styles.btn}>Add contact</button>
        </form>
    );
  }
}

export default ContactForm;