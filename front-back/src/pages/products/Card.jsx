import React from 'react'
import {Link} from 'react-router-dom';
import './card.css';
import Slider from "./Slider";


const Card = (props) => {
const id=props.location.pathname.substring(1)
const product=props.products.find(el=>el._id==id)
console.log(product)
    return (
        <div  >
         {/* <div className='carte' > */}
       <div className='titr' > {product.title}</div>
        <div className='carde' >
        <Slider product={product} />
        {/* <Link className='container' to='/'>Acceuil</Link> */}
        <p className='descri' >{product.description}</p>
        <div className='buy'>
       <Link className='buy1' >Ajouter à ma carte</Link>
       <Link className='buy2' >Acheter maintenant </Link>
       </div>
        </div>
        {/* </div>  */}
        </div>
     
     )
}
export default Card;

