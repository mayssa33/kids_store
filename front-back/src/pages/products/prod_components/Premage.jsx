import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Premage = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const prem = products.filter(el=>el.category==="jouets" && el.souscategory==="premierage")
  return (
    <div>
        {
            prem.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Premage;