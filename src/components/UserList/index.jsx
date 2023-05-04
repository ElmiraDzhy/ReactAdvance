import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { getUsers } from '../../api/getUsers';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers(page)
      .then(data => setUsers(data.results))
      .catch(e => {
        setError(error);
      })
      .finally(setIsFetching(false));
  }, [page, error]);

  const increment = () => {
    setPage(page => page + 1);
  };
  const decrement = () => {
    setPage(page => page - 1);
  };

  return (
    <>
      <button onClick={increment}>next</button>
      <button onClick={decrement}>prev</button>
      {isFetching && <Spinner />}
      {error && <div>Error</div>}
      <ol>
        {users.map(u => (
          <li key={u.login.uuid}>
            {u.name.first} {u.name.last}
          </li>
        ))}
      </ol>
    </>
  );
};

export default UserList;
