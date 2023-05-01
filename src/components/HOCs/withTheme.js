import { ThemeContext } from '../../contexts';

export const withTheme = Componenet => {
  return props => {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          return <Componenet theme={theme} setTheme={setTheme} {...props}/>;
        }}
      </ThemeContext.Consumer>
    );
  };
};