import React from 'react';
import { UserContext } from '../../../../../../contexts';

function InnerChild() {
  return (
    <UserContext.Consumer>
      {([user, logOut]) => {
        return (
          <div>
            <img
              style={{ width: '300px', height: '300px' }}
              src={user.avatar}
              alt=""
            />
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <button onClick={logOut}>LogOut</button>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default InnerChild;
