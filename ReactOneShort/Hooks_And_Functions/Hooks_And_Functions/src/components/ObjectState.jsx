import React from 'react'
import { useState } from 'react'
const ObjectState = () => {
          const [Users, setUsers] = useState({user:'sarthak',age:23})
          function UpdateName() {
            const newUsers = {...Users};
            newUsers.user = 'Aman'
            console.log(newUsers);
            setUsers(newUsers);
            
        }
  return (
    <div>
        <h1>{Users.user},{Users.age}</h1>
        <button onClick={UpdateName}>Click Me</button>
    </div>
  )
}

export default ObjectState
