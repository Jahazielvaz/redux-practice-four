import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  username: 'Mike Shinoda'
}

const store = createStore(reducer, initialState)

export default store;
