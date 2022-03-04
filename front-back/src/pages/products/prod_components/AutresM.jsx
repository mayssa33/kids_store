import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const AutresM = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const Autre = products.filter(el=>el.brand==="Autres")
  return (
    <div>
        {
            Autre.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default AutresM;