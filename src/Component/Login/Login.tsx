import React, { useState } from "react";
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";
import { apiLoggin } from "../../Api/User";
import { useNavigate } from "react-router-dom";
import NoLogin from "./NoLogin";
import SignIn from "./SignIn";


function Login() {
   const user = localStorage.getItem('userName');
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