import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Peluche = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const peluche = products.filter(el=>el.category==="jouets" && el.souscategory==="Peluches")
  return (
    <div>
        {
            peluche.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Peluche;