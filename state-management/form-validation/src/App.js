import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';
import FormReducer from './context/FormReducer';

const App = () => {

  return (
    <div className="App">
      <div className="text-center flex flex-col justify-center">
        <h1 className="text-5xl mb-5">Hook Form</h1>
        <FormReducer />
      </div>
    </div>
  );
}

export default App;
