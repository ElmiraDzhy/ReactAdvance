import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import styles from './SignInForm.module.css'

const SCHEMA = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

function SignInForm(props) {
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values);
      }}
      validationSchema={SCHEMA}
    >
      {props => {
        return (
          <Form className={ styles.form }>
            <Field name="email" className={ styles.field } />
            <ErrorMessage name="email" />
            <Field name="password" className={ styles.field }/>
            <ErrorMessage name="email" />
            <button type="submit" className={styles.button}>Sign In</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignInForm;
