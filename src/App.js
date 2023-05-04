import React, { useState } from 'react';
import { ThemeContext, UserContext } from './contexts';
import { CONSTANTS } from './constants';
import Tree from './components/Tree';
import Header from './components/Header';
import Sandbox from './components/sandbox/sandbox';

const App = () => {
  const [theme, setTheme] = useState(CONSTANTS.THEMES.LIGHT);

  const themeChange = () => {
    setTheme(
      theme === CONSTANTS.THEMES.LIGHT
        ? CONSTANTS.THEMES.DARK
        : CONSTANTS.THEMES.LIGHT
    );
  };

  return (
    <UserContext.Provider
      value={{
        id: '1',
        name: 'test',
        surname: 'testovich',
        avatar:
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
      }}
    >
      <ThemeContext.Provider value={[theme, themeChange]}>
        <Header />
        <Tree />
        <Sandbox/>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
