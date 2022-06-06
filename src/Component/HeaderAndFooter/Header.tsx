import { FileProtectOutlined, HomeOutlined, LoginOutlined, PlayCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import { Button, NavLink, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='Header ' style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundImage: 'linear-gradient(to bottom right, red, yellow)',
                color: 'white',
            }}>
                <div className='left' style={{
                   width: '70%',
                   height: '50px',
                   lineHeight: '50px',
                   textAlign: 'left',
                   color: 'white',
                }}>
                    <ul>
                        <li><a href='#'>
                        <HomeOutlined /> Home</a></li>
                        <li><a href='#'>
                        <FileProtectOutlined /> Product</a></li>
                        <li><a href='#'>
                        <ShoppingCartOutlined /> Cart</a></li>
                    </ul>
                </div>
                <div className='right' style={{
                   width: '30%',
                   height: '50px',
                   lineHeight: '50px',
                   textAlign: 'right',
                   marginRight:'20px',
                   color: 'white',
                   fontWeight:'bold',
                   cursor:'pointer'
                }}>
                   <span>
                   <PlayCircleOutlined /> Login</span>
                </div>
            </div>
        )
    }
}
