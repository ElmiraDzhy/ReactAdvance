import { UserContext } from '../../contexts';

 const withUser = Component => {
  return props => {
    return (
      <UserContext.Consumer>
        {value => {
          return <Component user={value} {...props} />;
        }}
      </UserContext.Consumer>
    );
  };
 };

export default withUser;
