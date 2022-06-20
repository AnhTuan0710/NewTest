import { FileProtectOutlined, HomeOutlined, LoginOutlined, PlayCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import { Button, NavLink, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import string from '../../../Constants/String'
import { BoxHeader, BoxLeft, BoxRight } from '../../../Style/Header'

export default class Header extends Component {
    render() {
        return (
            <BoxHeader>
                <BoxLeft>
                    <ul>
                        <li className='mx-3'><Link to='/'>
                        <HomeOutlined style={{color: 'yellow'}}/> {string.Home}</Link></li>
                        <li className='mx-3'><Link to='/product'>
                        <FileProtectOutlined style={{color: 'yellow'}}/>  {string.Product}</Link></li>
                        <li className='mx-3'><Link to='/cart'>
                        <ShoppingCartOutlined style={{color: 'yellow'}}/>  {string.Cart}</Link></li>
                    </ul>
                </BoxLeft>
                <BoxRight>
                   <Link to='/login'>
                       <span className='text-warning'><PlayCircleOutlined /> Login</span>
                    </Link>
                </BoxRight>
            </BoxHeader>
        )
    }
}
