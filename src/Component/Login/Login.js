import React from 'react';
// v9 compat packages are API compatible with v8 code
import './Login.css';
import { useContext, useState } from 'react';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleGoogleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import Form from 'react-bootstrap/Form';
import {Button, Col, Row} from 'react-bootstrap';


function Login() {
  const [newUser,setNewUser]=useState(false);


  const[user,setUser]= useState({
    isSignedIn: false,
    name:'',
    email:'',
    password:'',
    photo:'',
    error:''
  });
  initializeLoginFramework();
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

 
  const googleSignIn = ()=>{
    handleGoogleSignIn()
    .then(res=>{
      handleResponse(res, true);
    })
  }

  const googleSignOut = ()=>{
    handleGoogleSignOut()
    .then(res=>{
      handleResponse(res, false);
    })
  }

  const handleResponse = (res,redirect)=>{
      setUser(res);
      setLoggedInUser(res);
      if(redirect){
        history.replace(from);
      }
      
  }
    const handleBlur = (event)=>{
    console.log(event.target.name,event.target.value);
    let isFieldValid = true;
    if(event.target.name === 'email'){
      
      // eslint-disable-next-line no-unused-vars
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
      
    }

    if (event.target.name === 'password'){
        const isPasswordValid = event.target.value.length > 6;
        const passwordHasNumber = /\d{1}/.test(event.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber;
    }

    if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[event.target.name] = event.target.value;
        setUser(newUserInfo);
    }

    }
    const handleSubmit = (e)=>{
      console.log(user.email,user.password)
      if(newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name,user.email,user.password)
        .then(res=>{
          handleResponse(res, true);
        })
      }

      if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email,user.password)
        .then(res=>{
          handleResponse(res, true);
        })
      }
      e.preventDefault();
    }

  return (
    <div className="row container">
        <br />
        <br />
     <Form className="col-12 offset-md-5 col-md-4 form justify-content-md-center">
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""/><label htmlFor="newUser">New User Sign up</label>
    <br />
    { newUser && <Form.Control type="text" name="name" onBlur={handleBlur} placeholder="Your Name"/>} <br />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    {/* <Form.Check type="checkbox" label="Check me out" /> */}
  </Form.Group>
  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 4 }}>
      <input onSubmit={handleSubmit} className="toggleSign" type="submit" value={newUser?"Sign Up": "Sign In"}/>
    </Col>
    <p style={{color:'red'}}>{user.error}</p>
     
     {user.success && <p style={{color:'green'}}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
  </Form.Group>
  <h6 className="or">========Or=======</h6>
  {
    user.isSignedIn ? <Button className="button2 signInOutBtn" onClick={googleSignOut} variant="outline-warning">Sign Out from Google</Button>:
    <Button className="button2 signInOutBtn" onClick={googleSignIn} variant="outline-warning">Sign In with Google</Button>
  }
  
  
</Form>

<p style={{color:'red'}}>{user.error}</p>
     
     {user.success && <p style={{color:'green'}}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
    </div>
  );
}

export default Login;
