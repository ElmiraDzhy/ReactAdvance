import React, { useState, useEffect } from 'react';

function MouseTracker(props) {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  const [ count, setCount ] = useState( 0 );

  const mouseHandler = e => {
    setMouse( {
      x: e.clientX,
      y: e.clientY,
    })
  };

  const countHandler = e => {
    setCount(count+1)
  };

  return (
    <div onClick={countHandler} onMouseMove={mouseHandler} style={{ width: '100vh', height: '100vh', backgroundColor: 'white' }}>
      x : { mouse.x }
      <br/>
      y: { mouse.y }
      


      <h2>{ count }</h2>
    </div>
  );
}

export default MouseTracker;
