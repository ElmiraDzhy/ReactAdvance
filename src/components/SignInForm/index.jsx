import React, { Component } from 'react';

export default class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  changeHandler = e => {
    console.dir(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlerSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <input
          type="email"
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
        <button type="submit" onSubmit={this.handlerSubmit}>Sign In</button>
      </form>
    );
  }
}
