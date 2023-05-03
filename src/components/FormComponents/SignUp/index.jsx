import React from 'react';
import { Form, Formik } from 'formik';
import CustomField from '../CustomField';
import * as yup from 'yup';
import ButtonForm from '../ButtonForm';
import styles from './SignUp.module.scss';
import RoleCard from '../RoleCard';

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
    .max(16)
    .required(),
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
            <Form className={styles.formWrapper}>
              <div className={styles.form}>
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
                    <CustomField
                      name="lastName"
                      placeholder="enter last name"
                    />
                  </div>
                </div>

                <div className={styles.fieldWrapper}>
                  <label htmlFor="displayName">Display Name</label>
                  <CustomField
                    name="displayName"
                    placeholder="enter display name"
                  />
                </div>

                <div className={styles.fieldWrapper}>
                  <label htmlFor="email">Email Address</label>
                  <CustomField name="email" placeholder="enter email address" />
                </div>

                <div className={styles.fieldWrapper}>
                  <label htmlFor="password">Password</label>
                  <CustomField name="password" placeholder="enter password" />
                </div>

                <div className={styles.fieldWrapper}>
                  <label htmlFor="passwordConfirm">Confirm Password</label>
                  <CustomField
                    name="passwordConfirm"
                    placeholder="re-enter password"
                  />
                </div>

                <label htmlFor="role">
                  Select a situation that best describe you
                </label>

                <div role="group" className={styles.groupWrapper}>
                  <RoleCard
                    iconSrc="https://www.squadhelp.com/html/html/static_images/contests/buyer-icon.svg"
                    title="Join as a buyer"
                    descriptionText=" I am looking for a name, logo or tagline for my business,
                    brand or product."
                    fieldName="role"
                  />

                  <RoleCard
                    iconSrc="https://www.squadhelp.com/html/html/static_images/contests/seller-icon.svg"
                    title="Join as a creative or market place seller"
                    descriptionText="I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplaces"
                    fieldName="role"
                  />
                </div>
              </div>

              <ButtonForm
                style={{ backgroundColor: 'grey', background: 'grey' }}
              >
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
