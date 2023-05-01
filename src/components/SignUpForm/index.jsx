import React from 'react';
import styles from './SignInForm.module.css';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

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
      validationSchema={SIGN_UP_SCHEMA}
      onSubmit={(values, action) => {
        console.log(values);
        console.log(action);
        action.resetForm();
      }}
    >
      {formikProps => {
        const { errors } = formikProps;
        return (
          <Form className={styles.form}>
            <Field name="firstName" placeholder="name" />
            {/* { errors && <p>{ errors.firstName }</p> } */}
            <ErrorMessage
              name="firstName"
              component={'p'}
              className={styles.errorMessage}
            />

            <Field name="lastName" placeholder="surname" />
            <ErrorMessage
              name="lastName"
              component={'p'}
              className={styles.errorMessage}
            />

            <Field name="email" placeholder="email" />
            <ErrorMessage
              name="email"
              component={'p'}
              className={styles.errorMessage}
            />

            <Field name="password" placeholder="password" />
            <ErrorMessage
              name="password"
              component={'p'}
              className={styles.errorMessage}
            />

            <button type="submit">Sign In</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
