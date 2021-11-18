import React from 'react';
// v9 compat packages are API compatible with v8 code

import './Login.css';
import { useContext, useState } from 'react';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router';

import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';


function Login() {
  const [newUser,setNewUser] = useState(false);

  const [user,setUser] = useState({
    isSignedIn: false,
    name:'',
    email:'',
    password:'',
    photo:'',
    error:''
  });

  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  // console.log(user)
  // Google Sign IN
  const history = useHistory();
  const location = useLocation();
  
  let { from } = location.state || { from: { pathname: "/" } };
  
  return (
    <div class="row container">
        <br />
        <h2 className="heading text-center">Please Sign up Here to Log in</h2>
        <br />
     <Form className="col-12 offset-md-5 col-md-4 form justify-content-md-center">
  <Form.Group className="mb-3" controlId="formBasicEmail">
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
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="button1" variant="primary" type="submit">
    Submit
  </Button>
  <h6 className="or">========Or=======</h6>
  <Button className="button2" variant="outline-warning">Sign In with Google</Button>
  
</Form>
    </div>
  );
}

export default Login;
