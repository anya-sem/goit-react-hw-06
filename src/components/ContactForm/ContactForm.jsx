import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'

const initialValues = {
  name: "",
  number: ""
};

export const ContactForm = ({onAdd, validationSchema}) => {
    const nameFieldId = useId();
    const numberFieldId = useId();
    
    const handleSubmit = (values, actions) => {
        onAdd({ id: nanoid(), ...values });
        actions.resetForm();
}
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
            <Form className={css.form}>
                <p className={css.label}>Name</p>
                <Field className={css.field} type='text' name='name' id={nameFieldId} />
                <ErrorMessage className={css.error} name='name' component='span' />
                <p className={css.label}>Number</p>
                <Field className={css.field} type='tel' name='number' id={numberFieldId} />
                <ErrorMessage className={css.error} name='number' component='span'/>
                <button className={css.button} type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}