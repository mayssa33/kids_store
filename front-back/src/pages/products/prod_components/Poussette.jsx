import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Poussette = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const pous = products.filter(el=>el.category==="puériculture" && el.souscategory==="poussettes")
  return (
    <div>
        {
            pous.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Poussette;