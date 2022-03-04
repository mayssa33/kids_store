import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productActions';
import ProductList from './products/ProductList';




const Autourdubébé = () => {
    const dispatch = useDispatch();
    const {products, loading} = useSelector((state) => state.productReducer);
    console.log(products);
    useEffect(() => {
      dispatch(getProducts());
    }, []);

  return <div>
       
<ProductList products={products}/>

    </div>;
};

export default Autourdubébé;
