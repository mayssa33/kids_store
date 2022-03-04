import React from 'react';
import './contact.css';
import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";

const Contact = () => {
  return <div  >
    <p className='visit' >viens nous rendre visite </p>
    <p className='star' >okkk</p>
    <div className='contact' >
    <div className='store'>
      <h1 className='nom' >Notre boutique</h1>
      <p className='text' >Route manzel chaker </p>
      <p className='text' >km 3, Sfax tunisie</p>
      </div>
    <div className='customer'>
    <h2 className='nom'>nous contactez</h2>
    <p className='text'>Tel:+21620926232</p>
    </div>
    <div className='opening'>
    <h3 className='nom'>les heures de travail</h3>
    <p className='text'>Lundi-vendredi:10am-18h30pm</p>
     <p className='text'> Dimanche:10am-13pm</p>
    </div>
</div>
<div>
    <a href="https://www.instagram.com/sfax_kidstore/" target="_blank" ><IoLogoInstagram id='instaa' className='insta'/></a>
   <a href="https://www.facebook.com/D%C3%A9p%C3%B4t-kidstore-114817596726350" target="_blank" ><AiOutlineFacebook  className='insta' /></a>
    </div>
  </div>;
};

export default Contact;
