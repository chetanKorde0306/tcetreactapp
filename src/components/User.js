import React from 'react'

function User(props) {
   const {id,name,email,avatar} = props.data; 
  return (
    <div>
     <table border='1'>
        <thead>
            <th>id</th>
            <th>name</th>
            <th>enail</th>
            <th>Avatar</th>
        </thead>
        <tbody>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{avatar}</td>
        </tbody>
     </table>
    {/* <h3>{id}| {name}|{email}|<img src={avatar} alt="" /></h3> */}
    </div>
  )
}

export default User