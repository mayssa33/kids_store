import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Sucette = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const suc = products.filter(el=>el.category==="nourriture" && el.souscategory==="Sucettes")
  return (
    <div>
        {
            suc.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Sucette;