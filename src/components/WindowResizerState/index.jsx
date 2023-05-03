import { useEffect, useState } from 'react';

const WindowResizer = props => {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  useEffect(() => {
    const resizeHandler = e => {
      setSize({
        x: e.target.innerWidth,
        y: e.target.innerHeight,
      });
    };

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return props.children(size);
};

export default WindowResizer;
