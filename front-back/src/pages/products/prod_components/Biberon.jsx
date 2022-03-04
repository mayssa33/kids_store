import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Biberon = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const bib = products.filter(el=>el.category==="nourriture" && el.souscategory==="Biberons")
  return (
    <div>
        {
            bib.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Biberon;