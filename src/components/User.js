import React from 'react';

//Redux
import store from '../store';
import action from '../actions';

const User = (props) => {
  return(
    <div>
      <h1>{props.username}</h1>
      <button onClick={userSwitch}>Change User</button>
    </div>
  )
}

const userSwitch = () => store.dispatch(action);

export default User;
