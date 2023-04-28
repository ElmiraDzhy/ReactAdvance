import React from 'react';
import Parent from './Parent';
import { ThemeContext } from '../../contexts';
import styles from './Tree.module.css';
import classNames from 'classnames';
import { CONSTANTS } from '../../constants';

function Tree(prop) {
  return (
    <ThemeContext.Consumer>
			{ ( [ theme ] ) => {
				const className = classNames( {
					[ styles.light ]: theme === CONSTANTS.THEMES.LIGHT,
					[ styles.dark ]: theme === CONSTANTS.THEMES.DARK,
				})
        return (
          <div className={className}>
            <p>Tree</p>
            <Parent />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Tree;
