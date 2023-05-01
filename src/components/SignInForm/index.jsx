import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import styles from './SignInForm.module.css';

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
          <Form className={styles.form}>
            <Field
              name="email"
              placeholder="Email address"
              className={styles.field}
            />
            <ErrorMessage component={'p'} name="email" className={styles.errorMessage} />
            <Field
              name="password"
              placeholder="Password"
              className={styles.field}
            />
            <ErrorMessage component={'p'} name="email" className={styles.errorMessage} />
            <button type="submit" className={styles.button}>
              Login
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignInForm;
