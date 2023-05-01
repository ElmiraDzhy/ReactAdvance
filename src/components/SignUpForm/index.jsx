import React, { Component } from 'react';
import styles from './SignInForm.module.css';
import * as yup from 'yup';

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

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      error: null,
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
    try {
      const result = SIGN_UP_SCHEMA.validateSync(this.state);
      console.log(result);
    } catch (e) {
      this.setState({
        error: e,
      });
    }
  };

  render() {
    const { email, password, firstName, lastName, error } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handlerSubmit}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="name"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="surname"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={this.changeHandler}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={this.changeHandler}
        />
        {error && <p>{error.message}</p>}
        <button type="submit">Sign In</button>
      </form>
    );
  }
}
