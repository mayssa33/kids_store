import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Maxi = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const maxi = products.filter(el=>el.category==="puériculture" && el.souscategory==="Maxi-cosi")
  return (
    <div>
        {
            maxi.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Maxi;