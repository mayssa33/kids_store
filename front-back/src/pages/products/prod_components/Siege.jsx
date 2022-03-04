import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/productActions';
import ProductCard from '../ProductCard';

const Siege = () => {
    const {products, loading} = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    const sieg = products.filter(el=>el.category==="puériculture" && el.souscategory==="Siéges autos")
  return (
    <div>
        {
            sieg.map(el=>
                <ProductCard product={el} />
                )
        }
    </div>
  )
}

export default Siege;