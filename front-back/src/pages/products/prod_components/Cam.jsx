import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Cam = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const cam = products.filter(el=>el.brand==="Cam")
  return (
    <div>
        {
            cam.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Cam;