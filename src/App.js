import React from 'react';
import Tree from './components/Tree';
import { UserContext, ThemeContext } from './contexts';
import Header from './components/Header';

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

      theme: 'light',
    };
  }

  logout = () => {
    this.setState({
     user: {},
    });
  };

  themeChange = () => {
    const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
    console.log('message')
    this.setState( {
      theme: newTheme,
    });
  };

  render() {
    const { user, theme } = this.state;
    return (
      <ThemeContext.Provider value={[theme, this.themeChange]}>
        <UserContext.Provider value={[user, this.logout]}>
          <Header />
          <Tree />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
