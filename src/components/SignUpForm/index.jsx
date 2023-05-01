import React from 'react';
import styles from './SignInForm.module.css';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

const SIGN_UP_SCHEMA = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
  firstName: yup
    .string()
    .required()
    .min(2, 'Name must be more than 1 letter')
    .max(20),
  lastName: yup.string(),
});

const SignUpForm = () => {
  const initialValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        console.log(values);
        console.log(action);
        action.resetForm();
      }}
    >
      {formikProps => {
        return (
          <Form className={styles.form}>
            <Field name="firstName" placeholder="name" />
            <Field name="lastName" placeholder="surname" />
            <Field name="email" placeholder="email" />
            <Field name="password" placeholder="password" />
            {/* {error && <p>{error.message}</p>} */}
            <button type="submit">Sign In</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
