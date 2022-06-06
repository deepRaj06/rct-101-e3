import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';
import { Navigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, dispatch] = useContext(AuthContext);
  // console.log(state);


  const handleSubmit = (e) => {
        e.preventDefault();
        axios({
          url:'https://reqres.in/api/login',
          method:'POST',
          data:{
            email,
            password
          }
        })
        .then((res) => {
          alert('success');
          console.log(res.data);
          dispatch({type:'LOGIN_SUCCESS',
                    token: res.data.token})
        })
  }
  if(state.isAuth)
  {
    return <Navigate to='/products'></Navigate>
  }

  return (
    <div style={{display:'flex', flexDirection:'column', width: '10%', margin: 'auto'}}>
      <input 
      onChange={(e) => setEmail(e.target.value)}
      type='email' 
      data-cy="login-email" />
      <input
      onChange={(e) => setPassword(e.target.value)}
       type='password' data-cy="login-password" />
      <button onSubmit={handleSubmit} data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
