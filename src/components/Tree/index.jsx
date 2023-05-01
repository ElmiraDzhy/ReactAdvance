import React from 'react';
import Parent from './Parent';
import styles from './Tree.module.css';
import classNames from 'classnames';
import { CONSTANTS } from '../../constants';
import withTheme from '../HOCs/withTheme';

function Tree(props) {
  const { theme } = props;
  const className = classNames({
    [styles.light]: theme === CONSTANTS.THEMES.LIGHT,
    [styles.dark]: theme === CONSTANTS.THEMES.DARK,
  });
  return (
    <div className={className}>
      <p>Tree</p>
      <Parent />
    </div>
  );
}

const TreeWithTheme = withTheme(Tree);
export default TreeWithTheme;
