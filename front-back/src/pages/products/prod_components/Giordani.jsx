import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Giordani = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const gio = products.filter(el=>el.brand==="Giordani")
  return (
    <div>
        {
            gio.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Giordani;