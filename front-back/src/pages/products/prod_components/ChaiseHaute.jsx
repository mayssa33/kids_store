import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const ChaiseHaute = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const chaiseh = products.filter(el=>el.category==="puériculture" && el.souscategory==="Chaises Hautes")
  return (
    <div>
        {
            chaiseh.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default ChaiseHaute;