import './Productcard.css' ;
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../navbar/Search';
// import { AiOutlineSearch } from "react-icons/ai";


const ProductCard = ({product,products}) => {
    return (
      <div className='cent'>
  <div className='cards '>
  <div className='card'>
  <h6 className='titre' >{product.title}</h6>
    <div className='hover' >
  <a> <img src={product.imageUrl[0]}></img></a>
   <Link className='loop' to={`/${product._id}`} >plus de details</Link>
   </div>
   <p className='price'>{product.price}DT</p>
 
{/* <h6 className='titre' >{product.title}</h6>
<p className='price'>{product.price}DT</p>
<div className='overview' >
<Link className='details' to={`/${product._id}`}> Details </Link>
</div> */}
  </div>
  </div>
   
</div>
    )}
    export default ProductCard