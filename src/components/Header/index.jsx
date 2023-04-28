import React from 'react';
import classNames from 'classnames';
import { UserContext, ThemeContext } from '../../contexts';
import styles from './Header.module.css';

function index() {
  return (
    <ThemeContext.Consumer>
      { ( [ theme, themeChange ] ) => {
      console.log(theme)
        return <UserContext.Consumer>
          {([user]) => {
            const className = classNames({
              [styles.light]: theme === 'light',
              [styles.dark]: theme === 'dark',
            });
            return (
              <nav className={className}>
                <h1>Header</h1>
                <img
                  style={{
                    width: '150px',
                    height: '150px',
                    marginLeft: 'auto',
                  }}
                  src={user.avatar}
                  alt=""
                />
                <button style={ { width: '100px', height: '30px'}} onClick={themeChange}>ChangeTheme</button>
              </nav>
            );
          }}
        </UserContext.Consumer>;
      }}
    </ThemeContext.Consumer>
  );
}

export default index;
