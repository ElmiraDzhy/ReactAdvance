import React, { useContext } from 'react';
import Parent from './Parent';
import styles from './Tree.module.css';
import classNames from 'classnames';
import { CONSTANTS } from '../../constants';

import { ThemeContext } from '../../contexts';

function Tree() {
  const [theme] = useContext( ThemeContext );
  const className = classNames({
    [styles.light]: theme === CONSTANTS.THEMES.LIGHT,
    [styles.dark]: theme === CONSTANTS.THEMES.DARK,
  } );
  
  return (
    
    <div className={className}>
      <p>Tree</p>
      <Parent />
    </div>
  );
}

// const TreeWithTheme = withTheme(Tree);
export default Tree;
