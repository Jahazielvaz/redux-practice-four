const reducer = (action, state) => {
  console.log(state);
  switch(action.type){
    case 'USER':
    return {state,
      username: action.username
    }

  }
  return state;
}

export default reducer;
