import * as Yup from 'yup';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import css from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../redux/filtersSlice';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
  number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
});

function App() {
  const inputValue = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm validationSchema={validationSchema} />
      </div>
      <div className={css.searchWrap}>
        <SearchBox
          inputValue={inputValue}
          handleChange={evt => dispatch(updateFilter(evt.target.value))}
        />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
