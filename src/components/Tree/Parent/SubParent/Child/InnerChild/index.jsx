import React, {useContext} from 'react';
import classNames from 'classnames';
import styles from './Child.module.css';
import { CONSTANTS } from '../../../../../../constants';
import { Switch } from '@mui/material';
import { ThemeContext, UserContext } from '../../../../../../contexts';

function InnerChild(props) {
 
  const [ theme, themeChange ] = useContext( ThemeContext );
  const user = useContext( UserContext );

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
      <button>LogOut</button>
      <Switch
        checked={theme === CONSTANTS.THEMES.LIGHT}
        onChange={themeChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </div>
  );
}

export default InnerChild;
