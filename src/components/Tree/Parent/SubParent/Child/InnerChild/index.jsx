import React from 'react'
import { UserContext } from '../../../../../../contexts'

function InnerChild() {
  return (
    <UserContext.Consumer>
      { value => {
        return (
          <div>
              <p>{ value.name }</p>
            <p>{ value.surname }</p>
            <img src={value.avatar} alt="" />

          </div>
          
        )
      } }
    </UserContext.Consumer>
  )
}

export default InnerChild
