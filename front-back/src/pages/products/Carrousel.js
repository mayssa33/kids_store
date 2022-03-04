import React from 'react';
import {Button, Carousel} from 'react-bootstrap';
import './carrousel.css';
import { Link } from 'react-router-dom';


function Carrousel() {
 

  
  return (
    <div className="App">
     <Carousel className='carousel' >
  <Carousel.Item>
    <img
      className="img"
      src="https://static.wixstatic.com/media/84770f_8897d56596bf47dfb8ee6086b04020a9~mv2_d_2000_1328_s_2.jpg/v1/fill/w_980,h_591,al_c,q_85,usm_0.66_1.00_0.01/84770f_8897d56596bf47dfb8ee6086b04020a9~mv2_d_2000_1328_s_2.webp"
      alt="First slide"
    />
    <Carousel.Caption className='caption'>
    <p className='p' >Pour que votre nourrisson passe une bonne nuit nous vous proposons une large gamme d'accessoires de puériculture</p>
    <Link to="/puericulture">
    
    <Button  className='bouton' >Acheter</Button>
    </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      src="https://static.wixstatic.com/media/45d10e_8dccc6a5d0a6494fa8fc170e81d86304~mv2.jpg/v1/fill/w_980,h_591,al_c,q_85,usm_0.66_1.00_0.01/45d10e_8dccc6a5d0a6494fa8fc170e81d86304~mv2.webp"
      alt="Second slide"
    />
    <Carousel.Caption>
      <p className='p' >Choisissez des légumes bien tolérés par l'estomac de votre bébé</p>
      <Link to="/nourriture" >
      <Button className='bouton' >Acheter</Button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      src="https://static.wixstatic.com/media/45d10e_a3a66116cdfa48188a5c7abbc509a2d5~mv2.jpg/v1/fill/w_980,h_591,al_c,q_85,usm_0.66_1.00_0.01/45d10e_a3a66116cdfa48188a5c7abbc509a2d5~mv2.webp"
      alt="Third slide"
    />
    <Carousel.Caption>
      <p className='p' >Une sélection originale qui laisse une large place à l’émotion et la quête de sens. Avec nous, vos enfants vont vivre des expériences mémorables en phase avec le monde d’aujourd’hui et de demain</p>
     <Link to="/jouet" >
      <Button to="/jouet" className='bouton' >Acheter</Button>
     </Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}


export default Carrousel;
