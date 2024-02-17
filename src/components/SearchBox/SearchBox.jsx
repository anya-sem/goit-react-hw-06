import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const inputValue = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="search"
        value={inputValue}
        onChange={evt => dispatch(updateFilter(evt.target.value))}
      />
    </div>
  );
}
