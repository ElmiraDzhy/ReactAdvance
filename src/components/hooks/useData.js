import { useState, useEffect } from 'react';

function useData(callback) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    callback()
      .then(data => setData(data))
      .catch(e => {
        setError(e);
      })
      .finally(setIsFetching(false));
  }, [callback] );
  

  return {data, error, isFetching};
}

export default useData;
