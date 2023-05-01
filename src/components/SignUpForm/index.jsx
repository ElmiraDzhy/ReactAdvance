import React, { Component } from 'react';
import styles from './SignInForm.module.css';
import * as yup from 'yup';

const SIGN_UP_SCHEMA = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
  firstName: yup.string(),
  lastName: yup.string(),
});

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlerSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password, firstName, lastName } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handlerSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder=""
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder=""
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder=""
          onChange={this.changeHandler}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder=""
          onChange={this.changeHandler}
        />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}
