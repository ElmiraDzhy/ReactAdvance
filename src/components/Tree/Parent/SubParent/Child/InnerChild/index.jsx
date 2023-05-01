import React from 'react';
import withTheme from '../../../../../HOCs/withTheme';
import withUser from '../../../../../HOCs/withUser';
import classNames from 'classnames';
import styles from './Child.module.css';
import { CONSTANTS } from '../../../../../../constants';
import { Switch } from '@mui/material';

function InnerChild(props) {
  const {
    theme,
    themeChange,
    user: [user, logOut],
  } = props;
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
}

export default withUser(withTheme(InnerChild));
