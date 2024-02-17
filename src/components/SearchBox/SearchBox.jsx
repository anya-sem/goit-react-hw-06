import css from './SearchBox.module.css'

export const SearchBox = ({ inputValue, handleChange }) => {
    return (
        <div className={css.wrapper}>
            <p className={css.label}>Find contacts by name</p>
            <input
                className={css.input}
                type="text"
                name="search"
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    )
}