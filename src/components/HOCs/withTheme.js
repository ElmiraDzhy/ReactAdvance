import { ThemeContext } from '../../contexts';

const withTheme = Componenet => {
  return props => {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          return <Componenet theme={theme} themeChange={setTheme} {...props} />;
        }}
      </ThemeContext.Consumer>
    );
  };
};
export default withTheme;
