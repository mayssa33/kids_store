import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const JouetEveil = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    console.log(products);
    const eveil = products.filter(el=>el.category==="jouets" && el.souscategory==="d'éveil")
  return (
    <div>
        {
          loading ? <h2>loading...</h2>
          :
            eveil.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default JouetEveil;