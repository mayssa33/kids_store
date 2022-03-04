import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Medela = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const med = products.filter(el=>el.brand==="Medela")
  return (
    <div>
        {
            med.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Medela;