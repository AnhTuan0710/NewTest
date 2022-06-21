import { PhoneOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import string from '../../Constants/String';
import { TitleHeading, TitleInfo } from '../../Style/ProfileLogin';

export default function SignIn() {
    let navigate = useNavigate();
    const userName = localStorage.getItem('userName')
    const userPhone = localStorage.getItem('userPhone')
    let user = userName?.toLocaleUpperCase()
    let phoneNumber = userPhone?.toLocaleUpperCase()
    const handleSummit = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <div>
            <TitleHeading>{string.LoginSuccess}</TitleHeading>
            <div style={{ display: 'flex', flexDirection: 'row', margin: '40px 0px' }}>
                <div style={{ width: '50%' }}>
                    <img src='https://i.pinimg.com/originals/66/40/dd/6640dded16eae3a7adef2c2f7e9b83f3.jpg' alt='' 
                    style={{ width: '350px', height: '600px', boxShadow: '20px 20px 35px #73c04e' }}>
                    </img>
                </div>
                <div>
                    <TitleInfo > {string.InforUser} </TitleInfo>
                    <div className='text-start'>
                        <UserOutlined className='text-primary fs-5 mx-2'/>
                        <span className='fs-6'>Tên người dùng: </span>
                        <span className='fw-bold mx-1'>{user}</span>
                        <hr></hr>
                        <PhoneOutlined className='text-primary fs-5 mx-2' />
                        <span className='fs-6'>Số điện thoại: </span>
                        <span className='fw-bold mx-1'>{phoneNumber}</span>
                        <hr></hr>
                    </div>
                    <input onClick={handleSummit}
                        className="btn btn-primary mt-3" 
                        type="button"
                        value="Log out">
                    </input>
                    <br></br>
                    <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' alt='' style={{width: '400px', margin: '20px'}}>
                    </img>
                </div>
            </div>

        </div>
    )
}
