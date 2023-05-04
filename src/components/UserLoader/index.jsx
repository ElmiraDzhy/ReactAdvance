import React from 'react';
import Spinner from '../UserList/Spinner';
import useData from '../hooks/useData';

const UserLoader = () => {
  const { data, error, isFetching } = useData(() => fetch('/users.json').then(res => res.json()));

  return (
    <div>
      {error && <div>OOPs</div>}
      {isFetching && <Spinner />}
      <ul>
        {data.map(u => (
          <li>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserLoader;
