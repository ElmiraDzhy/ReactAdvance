import React from 'react'
import Child from './Child'

function SubParent(props) {
  return (
    <div>
      <p>Subparent</p>
      <Child/>
    </div>
  )
}

export default SubParent
