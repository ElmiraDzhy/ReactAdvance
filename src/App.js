import React from 'react';
import { CONSTANTS } from './constants';
import SignInForm from './components/SignInForm';
const { THEMES } = CONSTANTS;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        name: 'test',
        surname: 'testovich',
        avatar:
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
      },

      theme: THEMES.LIGHT,
    };
  }

  logout = () => {
    this.setState({
      user: {},
    });
  };

  themeChange = () => {
    const newTheme =
      this.state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return <SignInForm />;
  }
}

export default App;
