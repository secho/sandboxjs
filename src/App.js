import React from 'react';
import './App.css';


import Welcome from './components/Welcome'
import Articles from './components/Articles';


const App = () => {

  function onWelcomeClick(count) {
    console.log('clicked ' + count);
  }

  return (
    <div className="App">
      <Welcome name={'clicker'} clickHandler={onWelcomeClick}/>
      <Articles/>
    </div>
  );

}

export default App;
