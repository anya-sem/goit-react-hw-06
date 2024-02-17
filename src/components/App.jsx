import { useState, useEffect } from 'react'
import * as Yup from 'yup';
import { ContactForm } from './ContactForm/ContactForm'
import { ContactList } from './ContactList/ContactList'
import { SearchBox } from './SearchBox/SearchBox'
import css from './App.module.css'


const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
});

function App() {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact]
    })
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
    return prevContacts.filter(contact => contact.id !== contactId)
    })
  };
  
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={css.container}>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addContact}  validationSchema={validationSchema}/>
      </div>
      <div className={css.searchWrap}>
        <SearchBox inputValue={inputValue} handleChange={handleChange}/>
        <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
      </div>
    </div>
  )
}

export default App
