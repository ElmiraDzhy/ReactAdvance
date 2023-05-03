import React, { useEffect, useState } from 'react';
import { format, addSeconds } from 'date-fns';

const Timer = () => {
  const [count, setCount] = useState(new Date(0, 0, 0, 0, 0, 0, 0));

  const [isGoing, setIsGoing] = useState(true);

  useEffect(() => {
    if (isGoing) {
      const id = setInterval(() => {
        setCount(prev => addSeconds(count, 1));
      }, 1000);

      return () => {
        console.log('message');
        clearInterval(id);
      };
    }
  }, [isGoing, count]);

  const clear = () => {
    setCount(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  return (
    <>
      <h1>{format(count, 'HH:mm:ss')}</h1>
      <button onClick={() => setIsGoing(!isGoing)}>
        {isGoing ? 'stop' : 'start'}
      </button>

      <button onClick={clear}>clear</button>
    </>
  );
};

export default Timer;
