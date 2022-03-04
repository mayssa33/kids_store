import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Perego = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const pereg = products.filter(el=>el.brand==="Peg-Perégo")
  return (
    <div>
        {
            pereg.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Perego;