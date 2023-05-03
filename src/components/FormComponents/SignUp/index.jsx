import React from 'react';
import { Form, Formik } from 'formik';
import CustomField from '../CustomField';
import * as yup from 'yup';
import ButtonForm from '../ButtonForm';
import styles from './SignUp.module.scss';

const NAME_SHEMA = yup.string().min(2).max(30);

const SCHEMA = yup.object({
  email: yup.string().email('Email addres is not correct').required(),
  password: yup.string().min(5).max(16).required(),
  passwordConfirm: '',
  firstName: NAME_SHEMA,
  lastName: NAME_SHEMA,
  displayName: yup
    .string('Display name should be more than 4 characters')
    .min(4)
    .max(16),
});

function SignUp(props) {
  const initialValues = {
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    displayName: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SCHEMA}
    >
      {props => {
        return (
          <>
            <Form className={styles.form}>
              <div className={styles.fieldWrapperOuter}>
                <div className={styles.fieldWrapperInner}>
                  <label htmlFor="firstName">First Name</label>
                  <CustomField
                    name="firstName"
                    placeholder="Enter first name"
                  />
                </div>

                <div className={styles.fieldWrapperInner}>
                  <label htmlFor="lastName">Last Name</label>
                  <CustomField name="lastName" placeholder="enter last name" />
                </div>
              </div>

              <label htmlFor="displayName">Display Name</label>
              <CustomField
                name="displayName"
                placeholder="enter display name"
              />

              <label htmlFor="email">Email Address</label>
              <CustomField name="email" placeholder="enter email address" />

              <label htmlFor="password">Password</label>
              <CustomField name="password" placeholder="enter password" />

              <label htmlFor="passwordConfirm">Confirm Password</label>
              <CustomField
                name="passwordConfirm"
                placeholder="re-enter password"
              />
              <ButtonForm style={{ backgroundColor: 'grey' }}>
                {'Create my account'}
              </ButtonForm>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default SignUp;
