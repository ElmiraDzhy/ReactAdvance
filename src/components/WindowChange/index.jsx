
import WindowResizer from '../WindowResizerState';

const WindowChange =(props)=> {
 
    return (
      <WindowResizer>
          { data  => {
            return ( 
              <>
              <p>x: {data.x}</p>
               <p>y: {data.y}</p>
              </>
            )
            }}
      </WindowResizer>
    );
  
}

export default WindowChange;