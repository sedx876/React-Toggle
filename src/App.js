import React from 'react'
import './App.css'
import Toggle from './Toggle'
import Form from './Form'
import { Navbar } from "./components/navbar";
import { FooterContainer } from './containers/footer'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Toggle>
        <Form/>
      </Toggle>
      <Home/>
      <FooterContainer />
    </div>
  );
}

export default App;
