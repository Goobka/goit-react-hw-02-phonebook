import { Component } from 'react';
import ContactItem from '../ContactItem';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({number, name, id}) => (<ContactItem name={name} number={number} key={id} id={id} onContactDelete={this.props.onContactDelete}/>))}
      </ul>
    );
  }
}

export default ContactList;