import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div className='d-flex flex-column flex-shrink-0 p-3 text-white ' style={{
          width: '100%',
          height: '500px'
        }}> 
        <a href='/' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none fw-bold' >
          <span>Sidebar</span>
        </a>
        <hr className='text-dark 2px'/>
        <ul className='nav nav-pills flex-column mb-auto'>
          <li className='nav-item'>
            <a href="" className='nav-link active' aria-current='page'>
              <svg className='bi me-2' style={{
                width: '16px',
                height: '16px',
              }}></svg>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href="" className='nav-link' aria-current='page'>
              <svg className='bi me-2' style={{
                width: '16px',
                height: '16px',
              }}></svg>
              Dashboard
            </a>
          </li>
          <li className='nav-item'>
            <a href="" className='nav-link ' aria-current='page'>
              <svg className='bi me-2' style={{
                width: '16px',
                height: '16px',
              }}></svg>
              Product
            </a>
          </li>
        </ul>
        </div>
        
      </div>
    )
  }
}
