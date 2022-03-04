import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const BebeConfort = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const bconfort = products.filter(el=>el.brand==="bebeconfort")
  return (
    <div>
        {
            bconfort.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default BebeConfort;