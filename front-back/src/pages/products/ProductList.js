import React from 'react';
import {useSelector} from 'react-redux';
import ProductCard from './ProductCard';
import './Productlist.css';

const ProductList = ({products}) => {
  const {loading} = useSelector((state) => state);
  console.log(products);
  return (
    <div className='display'>
      {
        loading ? <h1>loading...</h1>
        :
       products && products.length>0 ? 
        <>
        {/* filtre avant map */}
        {
          products.map(el=>
            <ProductCard product={el} products={products} />
            )
        }
        </>
        : <p>nothing to be displayed</p>
      }
    </div>
  );
};

export default ProductList;
