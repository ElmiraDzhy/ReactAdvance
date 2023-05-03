import React, {useState} from 'react';
// import FormPage from './components/pages/FormPage';

const App = () => {

  const [ count, setCount ] = useState( 0 );
  const increment = () => {
    setCount( count + 1 );
  }
 
  return  <>
  <h1>{ count }</h1>
  <button onClick={increment}>increment</button>
  
  </> 
  
}

export default App;
