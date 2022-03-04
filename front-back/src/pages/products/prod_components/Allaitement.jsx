import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Allaitement = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const Allait = products.filter(el=>el.category==="nourriture" && el.souscategory==="Allaitement")
  return (
    <div>
        {
            Allait.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Allaitement;