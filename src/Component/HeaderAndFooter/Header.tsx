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
                backgroundImage: 'linear-gradient(to bottom right, pink, yellow)',
                color: 'black',
            }}>
                <div className='left' style={{
                   width: '70%',
                   height: '50px',
                   lineHeight: '50px',
                   textAlign: 'left',
                   color: 'black',
                }}>
                    <ul>
                        <li><Link to='/'>
                        <HomeOutlined /> Home</Link></li>
                        <li><Link to='/product'>
                        <FileProtectOutlined /> Product</Link></li>
                        <li><Link to='/cart'>
                        <ShoppingCartOutlined /> Cart</Link></li>
                    </ul>
                </div>
                <div className='right' style={{
                   width: '30%',
                   height: '50px',
                   lineHeight: '50px',
                   textAlign: 'right',
                   marginRight:'20px',
                   fontWeight:'bold',
                   cursor:'pointer'
                }}>
                   <Link to='/login'>
                       <span><PlayCircleOutlined /> Login</span>
                    </Link>
                </div>
            </div>
        )
    }
}
