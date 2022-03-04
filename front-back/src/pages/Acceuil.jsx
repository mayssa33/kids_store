import React from 'react';
import { Link } from 'react-router-dom';
import './acceuil.css';
import { BsSuitHeart } from "react-icons/bs";
import Carrousel from './products/Carrousel';

const Acceuil = () => {
  return <div className='home' >
    <Carrousel/>
    <div className='lkol' >
<Link to="/jouet" ><img className='joue'  src="https://i.imgur.com/3H6HdmC.jpg" alt="" />  </Link>
<Link to="/puericulture" ><img className='puer'  src="https://www.cdiscount.com/pdt2/1/5/2/1/700x700/chi8058664038152/rw/chicco-trotteur-evolutif-1-2-3-green.jpg" alt="" />  </Link>
<Link to="/nourriture" ><img className='nourri'  src="https://lebonremede.fr/26794-thickbox_default/8710103561842.jpg" alt="" />  </Link>
<p className='phrase' >ON VOUS ATTEND AVEC IMPATIENCE POUR NOUS RENDRE VISITE</p>
<p className='phrase' > <BsSuitHeart/> SOYEZ LES BIENVENUS <BsSuitHeart/> </p>
  </div>
  </div>;
  
};

export default Acceuil;
