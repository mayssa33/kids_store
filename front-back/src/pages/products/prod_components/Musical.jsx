import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Musical = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const music = products.filter(el=>el.category==="jouets" && el.souscategory==="Musicales")
  return (
    <div>
        {
            music.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Musical;