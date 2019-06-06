const reducer = (action, state) => {
  switch(action.type){
    case 'USER':
    return {...state,
      username: action.username
    }

  }
  return state;
}

export default reducer;
