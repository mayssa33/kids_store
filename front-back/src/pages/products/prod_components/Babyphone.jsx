import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Babyphone = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const baby = products.filter(el=>el.category==="puériculture" && el.souscategory==="Baby phone")
  return (
    <div>
        {
            baby.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Babyphone;