import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../user.json';
import { useState } from 'react';
function LoginForms() {
const navigate = useNavigate()
const [client , setClient ] = useState('')
const [pwd , setPwd ] = useState('')
const [isLoggedin , setIsLoggedin ] = useState('false')
const login =localStorage.getItem("login")
  const handleLogin = (e) => {
  e.preventDefault();
        if ((client=== data.username) && (pwd=== data.password) ) {
          localStorage.setItem("login",true)
          setIsLoggedin(login)
          navigate('/TTable')
        } else {
          console.log ('check your credentials')
        }
  };
  return (
    <div>
      {isLoggedin? ( 
    <Form >
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="username"  id ="username" placeholder="Enter Username" onChange={(e) => setClient(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  id="password" placeholder="Password" onChange={(e) => setPwd(e.target.value)}/>
      </Form.Group>
      < Button variant="primary" type ="Submit" onClick={(e)=>{handleLogin(e)}}>
        Log In
      </Button>
      </Form>
       ) : 
      navigate('/TTable')
}
    </div>
  );
}
export default LoginForms;