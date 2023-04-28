import React from 'react';
import { UserContext } from '../../contexts';

function index() {
  return (
    <UserContext.Consumer>
      {([user]) => {
        return (
          <nav style={ { backgroundColor: 'wheat' } }>
            <h1>Header</h1>
            <img
              style={{ width: '150px', height: '150px', marginLeft: 'auto'}}
              src={user.avatar}
              alt=""
            />
          </nav>
        );
      }}
    </UserContext.Consumer>
  );
}

export default index;
