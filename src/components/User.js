import React from 'react';

const User = (props) => {
  return(
    <div>
      <h1>{props.username}</h1>
      <button>Change User</button>
    </div>
  )
}

export default User;
