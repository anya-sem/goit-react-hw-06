import { Contact } from "../Contact/Contact"
import css from './ContactList.module.css'

export const ContactList = ({contacts, onDelete}) => {
    return (
            <ul className={css.wrapper}>
                {contacts.map(({ id, name, number }) => {
                    return <Contact
                        key={id}
                        name={name}
                        number={number}
                        id={id}
                        onDelete={onDelete}
                  />;
                })}
            </ul>
    )
}