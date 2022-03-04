import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Chicco = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const chico = products.filter(el=>el.brand==="Chicco")
  return (
    <div>
        {
            chico.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Chicco;