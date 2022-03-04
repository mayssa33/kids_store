import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Puericulture = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    console.log(products);
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const pueri = products.filter(el=>el.category==="puériculture")
    console.log(pueri)
  return (
    <div>
        {
            pueri.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Puericulture