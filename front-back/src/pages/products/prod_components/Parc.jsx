import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Parc = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const parc = products.filter(el=>el.category==="puériculture" && el.souscategory==="Parcs")
  return (
    <div>
        {
            parc.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Parc;