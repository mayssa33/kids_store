import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Nourriture = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const nouri = products.filter(el=>el.category==="nourriture")
    console.log(nouri);
  return (
    <div>
        {
            nouri.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Nourriture;