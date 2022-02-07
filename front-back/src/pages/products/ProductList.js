import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getProducts } from '../../redux/productActions';
import ProductCard from './ProductCard';
import './Productlist.css';

const ProductList = ({products}) => {
  const {loading} = useSelector((state) => state);
  console.log(products);
  return (
    <div>
      {
        loading ? <h1>loading...</h1>
        :
       products && products.length>0 ? 
        <>
        {
          products.map(el=>
            <ProductCard product={el} />
            )
        }
        </>
        : <p>nothing to be displayed</p>
      }
    </div>
  );
};

export default ProductList;
