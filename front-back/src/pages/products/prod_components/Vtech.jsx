import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Vtech = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const vtech = products.filter(el=>el.brand==="Vtech")
  return (
    <div>
        {
            vtech.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Vtech;