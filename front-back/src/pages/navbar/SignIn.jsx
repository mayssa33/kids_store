import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/actions';
import './connecte.css';

const SignIn = () => {
const [email,setEmail]= useState('');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    const [password,setPassword]= useState('');
    const dispatch = useDispatch()
    const handleNext=(e)=>{
        e.preventDefault();
        dispatch(loginUser({email,password}))
    }

  return <div>
{/* <img className='img' src="https://media.istockphoto.com/photos/wooden-toys-clothes-and-shoes-on-beige-background-picture-id1208543122?b=1&k=20&m=1208543122&s=170667a&w=0&h=XWJoq7cKkOO68FVrCUId9jSVFHju2hZewYGr2EZnrR0=" alt="" />    */}
   <img className='baby' src="https://images.unsplash.com/photo-1608039649006-df579ad70c64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2slMjBiYWJpZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
 <div class="wrapper">
    <form class="form-signin"  >       
      <h2 class="form-signin-heading">Bienvenue</h2>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" name="nom d'utilisateur" placeholder="Adresse Email" required="" autofocus="" />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control" name="mot de passe" placeholder="Mot de passe" required=""/>      
      {/* <label class="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Restez connecté</label> */}
      <button  onClick={handleNext} class="submit" type="button">suivant</button>   
    </form>
    {/* <Link to="/login" className="lien" >créer un compte</Link> */}
  </div>
  </div>;
};

export default SignIn;