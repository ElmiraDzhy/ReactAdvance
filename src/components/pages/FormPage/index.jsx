import React, { Component } from 'react';
import SignIn from '../../FormComponents/SignIn';
import SignUp from '../../FormComponents/SignUp';
import styles from './FormPage.module.scss'

export default class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
    };
  }

  submitToServer = data => {
    console.log(data);
  };

  clickHandler = () => {
    this.setState({
      signIn: !this.state.signIn,
    });
  };

  render() {
    const { signIn } = this.state;
    const btnText = signIn ? 'Signup' : 'Login';
    return (
      <section className={styles.container}>
        <button onClick={this.clickHandler}>{btnText}</button>
        { signIn ? <SignIn onSubmit={this.submitToServer } /> : <SignUp onSubmit={this.submitToServer }/>}
      </section>
    );
  }
}
