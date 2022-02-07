import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productActions';
import ProductList from './products/ProductList';




const ShopCollection = () => {
    const dispatch = useDispatch();
    const {products, loading} = useSelector((state) => state);
    console.log(products);
    useEffect(() => {
      dispatch(getProducts());
    }, []);

  return <div>
      <h1>collection</h1>
<ProductList products={products}/>

    </div>;
};

export default ShopCollection;
