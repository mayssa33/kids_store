import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {loginUser} from '../redux/actions';


const SignIn = () => {
const [email,setEmail]= useState('');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    const [password,setPassword]= useState('');
    const dispatch = useDispatch()
    const handleNext=(e)=>{
        e.preventDefault();
        dispatch(loginUser({email,password}))
    }

  return <div>
      <Form  >
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  <Button onClick={handleNext}  >Next</Button> 
</Form> 
  </div>;
};

export default SignIn;