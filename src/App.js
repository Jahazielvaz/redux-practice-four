import React from 'react';
import './App.css';

//Redux
import store from './store';
import action from './actions';

//Components
import User from './components/User';


function App() {
  return (
    <div className="App">
      <User username={store.getState().username} />
    </div>
  );
}



export default App;
