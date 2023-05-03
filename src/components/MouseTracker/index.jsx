import React, { useState, useEffect } from 'react';

function MouseTracker(props) {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  const [count, setCount] = useState(0);

  const mouseHandler = e => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const countHandler = e => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.addEventListener('click', mouseHandler);

    console.log('message')
    return () => {
      document.removeEventListener('click', mouseHandler);
    };
  }, []);

  return (
    <>
      x : {mouse.x}
      <br />
      <br />
      y: {mouse.y}
      <br />
      <h2>{count}</h2>
    </>
  );
}

export default MouseTracker;
