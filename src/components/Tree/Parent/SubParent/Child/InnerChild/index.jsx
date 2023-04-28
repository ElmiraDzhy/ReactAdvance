import React from 'react';
import { UserContext, ThemeContext } from '../../../../../../contexts';
import classNames from 'classnames';
import styles from './Child.module.css';
function InnerChild() {
  return (
    <ThemeContext.Consumer>
      {([theme, themeChange]) => {
        return <UserContext.Consumer>
          {([user, logOut]) => {
            const className = classNames({
              [styles.light]: theme === 'light',
              [styles.dark]: theme === 'dark',
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
                <button onClick={ logOut }>LogOut</button>
                <button onClick={themeChange}>theme</button>
              </div>
            );
          }}
        </UserContext.Consumer>;
      }}
    </ThemeContext.Consumer>
  );
}

export default InnerChild;
