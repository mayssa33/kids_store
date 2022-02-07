import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {registerUser} from '../redux/actions';


const SignUp = () => {
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
const [email,setEmail]= useState('');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    const [password,setPassword]= useState('');
    const [number, setNumber ] = useState('');
const [sexe, setSexe] = useState('');
const [dateBirth , setDateBirth] = useState('');
    const dispatch = useDispatch()
    const handleChange = (e) => setSexe(e.target.value)
    const handleNext=(e)=>{
        e.preventDefault();
        const newUser={
            firstName,lastName,email,
            password,number,sexe,dateBirth


        }
        dispatch(registerUser(newUser))
    }

  return <div>
      <Form  >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name </Form.Label>
    <Form.Control type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Last Name </Form.Label>
    <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label> Date of Birth </Form.Label>
    <Form.Control type="date" placeholder="Date of Birth" value={dateBirth} onChange={(e)=>setDateBirth(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label> Phone Number </Form.Label>
    <Form.Control type="text" placeholder="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
  </Form.Group>
  <Form.Select value={sexe} onChange={handleChange} aria-label="Default select example">
  <option>gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  
</Form.Select>



  <Button onClick={handleNext}  >Next</Button> 
</Form> 
  </div>;
};

export default SignUp;
