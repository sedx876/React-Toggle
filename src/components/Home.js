import React, { Component } from 'react'
import D2Logo from '../images/D2Logo.png'

class Home extends Component {
  render() {
    return (
      <div>
        <img src={D2Logo}
          style={{width: '500px'}}
        />
        <p
          style={{fontWeight: 'bold', fontSize: '20px'}}>
            Welcome to D2PlayrPad
        </p>
        <p
          style={{fontWeight: 'bold', fontSize: '15px'}}>
          A place to keep track of all that is going on in your Diablo 2 game.</p>
      </div>
    )
  }
}

export default Home
