import React, { useCallback, useState } from 'react';

function computeValue( value ) {
  return value ** 3;
}

function Sandbox( props ) {
  const [inputValue, setValue] = useState(0);

  const changeHandler = useCallback( ( { target: { value } } ) => {
    setValue(Number(value));
  }, []);

  const logValue = useCallback(() => {
    console.log(inputValue);
  }, [inputValue]);

  
  const layoutValue = computeValue( inputValue );

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <button onClick={ logValue }>Click me</button>
      <h1>{layoutValue}</h1>
    </div>
  );
}

export default Sandbox;
