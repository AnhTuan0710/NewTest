import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { apiLoggin } from '../../Api/User';
import { useAppDispatch } from '../../App/hook';
import string from '../../Constants/String';
import { pushUser } from '../../Redux/UserSlice';
// import { getAllUser } from '../../Redux/UserSlice';

export default function NoLogin() {
    const [email, setEmail] = useState("");
    const [msgEmail, setMsgEmail] = useState("");
    const [msgPassword, setMsgPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [password, setPassWord] = useState("");
    let navigate = useNavigate();
    const dispath = useAppDispatch();
    // useEffect(() => {
    //     dispath(getAllUser())
    // }, []);
    const handleEmail = (value: string) => {
        let status = false;
        setEmail(value);
        if (value === null) {
            setMsgEmail("*Please input your email");
        } else {
            status = true;
            setMsgEmail("");
        }
        return status;
    };
    const handlePassword = (value: string) => {
        let status = false;
        setPassWord(value);
        if (value === null) {
            setMsgPassword("*Please input your password");
        }
        else if (password.length < 4) {
            setMsgPassword("*Password must have at least 4 characters");
        } else {
            setMsgPassword("");
            status = true;
        }
        return status;
    };
    const handleShow = () => {
        setShowPw(!showPw);
    };
    const handleSubmit = async () => {
        try {
            const res = await apiLoggin({
                login_id: email,
                password: password
            })
            console.log(res);
            if (res.status === 200) {
                dispath(pushUser(res.data.access_token,res.data.account.full_name))
                localStorage.setItem('access_token', res.data.access_token)
                localStorage.setItem('userName',res.data.account.full_name)
                localStorage.setItem('userPhone',res.data.account.phone_no)
                const tokken = localStorage.getItem('access_token')
                const respon = await axios.post('https://medlink-apiv2.ecomedic.vn/api/auth/signin', {
                    login_id: email,
                    password: password,
                },
                    {
                        headers: {
                            authorization: `${tokken}`
                        }
                    }
                )
                console.log(respon);

                navigate('/')
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div style={{
            margin: '30px'
        }}>
            <h3 style={{
                color: 'red', fontFamily: "cursive"
            }}>{string.LoginWithAccount}</h3>
            <section className="vh-100" style={{
                textAlign: 'center'
            }}>
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt='' />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">{string.SignInWith}</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <GooglePlusOutlined />
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <FacebookOutlined />
                                    </button>
                                </div>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example3" className="form-control form-control-lg" value={email}
                                        placeholder="Enter a valid email address" onChange={(e) =>
                                            handleEmail(
                                                e.target.value
                                            )
                                        } />
                                    <label className="form-label" style={{ color: 'red' }}>{msgEmail}</label>
                                </div>
                                <div className="form-outline mb-3">
                                    <input type={
                                        !showPw
                                            ? "password"
                                            : "text"
                                    } id="form3Example4" className="form-control form-control-lg" value={password}
                                        placeholder="Enter password" onChange={(e) =>
                                            handlePassword(
                                                e.target.value
                                            )
                                        } />
                                    <label className="form-label" style={{ color: 'red' }}>{msgPassword}</label>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" onClick={handleShow} />
                                        <label className="form-check-label" >
                                           {string.ShowPassword}
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">{string.ForgotPassword}</a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}
                                        style={{
                                            paddingLeft: ' 2.5rem', paddingRight: '2.5rem'
                                        }}     >{string.Login}</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">{string.NoAccount} <a href="#!"
                                        className="link-danger">{string.Register}</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

