import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Prenatal = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const pre = products.filter(el=>el.brand==="Prénatal")
  return (
    <div>
        {
            pre.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Prenatal;