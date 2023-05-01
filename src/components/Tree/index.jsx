import React from 'react';
import Parent from './Parent';
import { ThemeContext } from '../../contexts';
import styles from './Tree.module.css';
import classNames from 'classnames';
import { CONSTANTS } from '../../constants';

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

const withTheme = Componenet => {
  return props => {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          return <Componenet theme={theme} setTheme={setTheme} />;
        }}
      </ThemeContext.Consumer>
    );
  };
};

const TreeWithTheme = withTheme(Tree);
export default TreeWithTheme;
