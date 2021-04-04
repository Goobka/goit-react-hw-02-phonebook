import { Component } from 'react';
import styles from './ContactItem.module.css';

class ContactItem extends Component {
  render() {
    const {name, number, id, onContactDelete} = this.props;
    return (
      <li className={styles.item}>
        <span className={styles.name}>{name}:</span>
        <span className={styles.number}>{number}</span>
        <button className={styles.btn} type="button" onClick={() => onContactDelete(id)}>Delete</button>
      </li>
    )
  }
}

export default ContactItem;