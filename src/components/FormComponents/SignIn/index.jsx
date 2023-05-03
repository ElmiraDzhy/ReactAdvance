import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './SignIn.module.scss';
import * as yup from 'yup';
import CustomField from '../CustomField';
import ButtonForm from '../ButtonForm';

const SCHEMA = yup.object({
  email: yup.string().email('Email addres is not correct').required(),
  password: yup.string().min(5).max(16).required(),
});

function SignIn(props) {
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={SCHEMA}
    >
      {props => {
        return (
          <article className={styles.wrapper}>
            <h1 className={styles.title}>Login to your account</h1>
            <Form>
              <div className={styles.form}>
                {/*  */}
                <div className={styles.fieldWrapper}>
                  <label className={styles.labelField} htmlFor="email">
                    Email Address
                  </label>
                  <CustomField name="email" placeholder="enter Email address" />
                </div>

                <div className={styles.fieldWrapper}>
                  <label className={styles.labelField} htmlFor="password">
                    Password
                  </label>
                  <CustomField name="password" placeholder="enter Password" />
                </div>
                {/*  */}
              </div>
              <div className={styles.divWrapper}>
              <div className={styles.checkboxWrapper}>
                <Field type="checkbox" value={false} />
                <p className={styles.remember}>Remember me</p>
              </div>
              <a href="forgot_password.php">Forgot password</a>
              </div>
            <ButtonForm>{'Login'}</ButtonForm>
            </Form>

            
          </article>
        );
      }}
    </Formik>
  );
}

export default SignIn;
