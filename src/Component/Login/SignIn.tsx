import { Button } from 'antd';
import { ALL } from 'dns';
import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    let navigate = useNavigate();
    const handleSummit =() =>{
        localStorage.clear()
        navigate('/')
    }
    return (
        <div>
            <h1>
                Ban da dang nhap thanh cong
            </h1>
            <Button onClick={handleSummit}>Login</Button>
        </div>
    )
}
