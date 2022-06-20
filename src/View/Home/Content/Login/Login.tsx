import React from "react";
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import NoLogin from "../../../../Component/Login/NoLogin";
import SignIn from "../../../../Component/Login/ProfileUser";


function Login() {
    const user = localStorage.getItem('access_token');
    return (
        <div>
            {user === null ?
                (
                    <NoLogin></NoLogin>
                ) : (
                    <SignIn></SignIn>
                )
            }
        </div>
    )
}

export default Login