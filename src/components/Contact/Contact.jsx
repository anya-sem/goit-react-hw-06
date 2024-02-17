import { IoIosPerson } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import css from './Contact.module.css'

export const Contact = ({ id, name, number, onDelete}) => {
    return (
        <div className={css.wrapper}>
            <div className={css.titleWrap}>
                <IoIosPerson className={css.icon}/>
                <p className={css.title}>{name}</p>
            </div>
            <div className={css.titleWrap}>
                <IoIosCall className={css.icon}/>
                <p className={css.title}>{number}</p>
            </div>
            <button className={css.button} onClick={()=> onDelete(id)}>Delete</button>
        </div>
    )
}