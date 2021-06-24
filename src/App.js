import React, {useState} from 'react'
import './App.css'
import Toggle from './Toggle'
import Form from './Form'
import { Navbar } from "./components/navbar";
import { FooterContainer } from './containers/footer'
import Home from './components/Home'
import Modal from './components/portal/Modal'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <Navbar/>
      <Toggle>
        <Form/>
      </Toggle>
      <Home/>
      
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
        <button className='waves-effect red' onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Some of that Fancy Modal Stuffs
        </Modal>
      </div>

      
    
      <FooterContainer />
    </div>
  );
}

export default App;
