import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../redux/actions';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './connecte.css';


const SignUp = () => {
  const {isAuth,loading}=useSelector(state=>state.reducer)
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
const [email,setEmail]= useState('');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    const [password,setPassword]= useState('');
    const [number, setNumber ] = useState('');
const [sexe, setSexe] = useState('Sexe');
const [dateBirth , setDateBirth] = useState('');
console.log(sexe)
    const dispatch = useDispatch()
    // const handleChange = (e) => setSexe(document.Sexe.value )
    const handleNext=(e)=>{
        e.preventDefault();
        const newUser={
            firstName,lastName,email,
            password,number,sexe,dateBirth


        }
        dispatch(registerUser(newUser))
    }

  return <div>
   {
     loading? <h2></h2>:isAuth? <Redirect to="/" />
     :
    <div>
      <img className='bibi'  src="https://images.unsplash.com/photo-1582486225644-aeacf6aa0b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFiaWVzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      <div class="wrapper">
      <form class="form-signin">
        <h2 class="form-signin-heading">S'inscrire</h2>
        <input type="text" class="form-control" value={firstName} name="username" placeholder="Prénom" required="" autofocus="" onChange={(e)=>setFirstName(e.target.value)} />
        <input type="text" class="form-control" value={lastName} name="username" placeholder="Nom" required="" autofocus="" onChange={(e)=>setLastName(e.target.value)} />
        <input type="email" class="form-control" value={email} name="username" placeholder="Adresse Email" required="" autofocus="" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" class="form-control" value={password} name="Mot de passe" placeholder="Mot de passe" required="" onChange={(e)=>setPassword(e.target.value)} />
        <input type="text" class="form-control" value={number} name="username" placeholder="Numéro de portable" required="" autofocus="" onChange={(e)=>setNumber(e.target.value)} />
        <input type="date" class="form-control" value={dateBirth} name="username" placeholder="date de naissance" required="" autofocus="" onChange={(e)=>setDateBirth(e.target.value)} />
        {/* <input type="text" class="form-control" name="username" placeholder="sexe" required="" autofocus="" onChange={handleChange}  /> */}
        <select name='Sexe' value={sexe} onChange={(e)=>setSexe(e.target.value)}  >
          <option disabled >Sexe</option>
          <option value="Masculin" onClick={()=>setSexe('Masculin')} >Masculin</option>
          <option  value="Feminin" onClick={()=>setSexe('Feminin')} >Feminin</option>
        </select>
        <button class="submit" type="button" onClick={handleNext} >Suivant</button>
      </form>
    </div>
  </div>
}
 


{/* <SignIn/>  */}
  </div>;
};

export default SignUp;
