import React from 'react'
import './App.css'
import Toggle from './Toggle'
import Form from './Form'
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Toggle>
        <Form/>
      </Toggle>
    </div>
  );
}

export default App;
