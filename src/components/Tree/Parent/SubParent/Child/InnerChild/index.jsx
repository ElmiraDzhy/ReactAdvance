import React from 'react';
import { UserContext } from '../../../../../../contexts';

function InnerChild() {
  return (
    <UserContext.Consumer>
      {([user, logOut]) => {
        return (
          <div>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <img src={user.avatar} alt="" />

            <button onClick={logOut}>LogOut</button>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default InnerChild;
