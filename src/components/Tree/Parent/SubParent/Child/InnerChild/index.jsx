import React from 'react';
import { UserContext, ThemeContext } from '../../../../../../contexts';
import classNames from 'classnames';
import styles from './Child.module.css';
import { CONSTANTS } from '../../../../../../constants';
import { Switch } from '@mui/material';

function InnerChild() {
  return (
    <ThemeContext.Consumer>
      {([theme, themeChange]) => {
        return (
          <UserContext.Consumer>
            {([user, logOut]) => {
              const className = classNames({
                [styles.light]: theme === CONSTANTS.THEMES.LIGHT,
                [styles.dark]: theme === CONSTANTS.THEMES.DARK,
              });
              return (
                <div className={className}>
                  <img
                    style={{ width: '300px', height: '300px' }}
                    src={user.avatar}
                    alt=""
                  />
                  <p>{user.name}</p>
                  <p>{user.surname}</p>
                  <button onClick={logOut}>LogOut</button>
                  <Switch
                    checked={theme === CONSTANTS.THEMES.LIGHT}
                    onChange={themeChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </div>
              );
            }}
          </UserContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default InnerChild;
