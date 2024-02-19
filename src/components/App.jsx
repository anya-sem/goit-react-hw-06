import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import css from './App.module.css';

function App() {
  return (
    <div className={css.container}>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.searchWrap}>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
