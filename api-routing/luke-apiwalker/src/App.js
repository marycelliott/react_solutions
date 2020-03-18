import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Result from './components/Result';
import Context from './context/APIContext';
import NotFound from './components/NotFound';
import { Router } from '@reach/router';
import './App.css';


function App() {
  const [state, setState] = useState({
    result: {}
  })

  return (
    <div className="App">
      <Context.Provider value={{state,setState}}>
        <Navbar />
        <Router preserverScrollPosition={false}>
          <Result path='/:id' />
          <NotFound path='/obiwan' />
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
