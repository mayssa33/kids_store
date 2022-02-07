import './Productcard.css' ;
import React from 'react';


const ProductCard = ({product}) => {
    return (
      <div className="card">
        <h3> {product.title} </h3>
        <img src={product.imageUrl} alt="" />
        <h4> {product.description} </h4>
        <h5> {product.price} </h5>
      </div>
    );
  };
  
  export default ProductCard;
  