import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div style={{
        backgroundImage: 'linear-gradient(180deg, red, yellow)',
        width: '100%',
        height: '50px',
        lineHeight: '50px',
        color:'white',
        fontWeight:'bold'
    }}>
      Footer
    </div>
    )
  }
}
