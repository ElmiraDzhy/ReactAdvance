import React, { useEffect, useState } from 'react';
const WindowResizer = props => {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const resizeHandler = e => {
    setSize({
      x: e.target.innerWidth,
      y: e.target.innerHeight,
    });
  };

  return props.children(size);
};

export default WindowResizer;
