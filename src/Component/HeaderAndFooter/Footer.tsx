import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div style={{
        backgroundImage: 'linear-gradient(to bottom right, yellow, pink)',
        width: '100%',
        height: '50px',
        lineHeight: '50px',
        color:'black',
        fontWeight:'bold',
    }}>
      Footer
    </div>
    )
  }
}
