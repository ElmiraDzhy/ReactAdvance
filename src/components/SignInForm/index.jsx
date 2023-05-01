import React, { Component } from 'react';
import styles from './SignInForm.module.css';
import yup from 'yup';

const SIGN_IN_SCHEMA = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handlerSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.changeHandler}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.changeHandler}
        />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}
