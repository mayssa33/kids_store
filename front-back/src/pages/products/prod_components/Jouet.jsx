import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Jouet = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    console.log(products)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const jouet = products.filter(el=>el.category==="jouets")
    console.log(jouet);
  return (
    <div>
        {
            jouet.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Jouet;