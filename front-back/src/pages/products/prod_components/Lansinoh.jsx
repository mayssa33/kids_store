import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Lansinoh = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const lans = products.filter(el=>el.brand==="Lansinoh")
  return (
    <div>
        {
            lans.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Lansinoh;