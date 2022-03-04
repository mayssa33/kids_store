import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Avent = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const avent = products.filter(el=>el.brand==="Avent")
  return (
    <div>
        {
            avent.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Avent;