import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const AssietteCui = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const asiet = products.filter(el=>el.category==="nourriture" && el.souscategory==="assietcuilleres")
  return (
    <div>
        {
            asiet.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default AssietteCui;