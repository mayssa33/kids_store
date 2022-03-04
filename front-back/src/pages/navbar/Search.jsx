// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '../../redux/productActions';
// import ProductCard from '../products/ProductCard';
// import './search.css';



// const Search = () => {
//   // const {products, loading} = useSelector((state) => state.productReducer);
//   // const [search, setSearch] = useState('')
//   // const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getProducts());}, []);
//  const [searchTitle, setSearchTitle] = useState('')
// return (
//         // <div>  
//  <div id="wrap">
//   <form action="" autocomplete="on">
//   <input 
//    name="search" 
//    type="text"
//     placeholder="Rechercher..."
//      onChange={(e)=>{
//        setSearchTitle(e.target.value);
//        }}
//        />
//   </form>
//   {ProductCard.filter().map((product,key)=>{
//               return (
//                <div className="search" key={key} >
//                  <div> {product.title} </div >
//                  </div>
//                 );
//               })}
//               </div>
//         );
//         }  

// export default Search;
// import React from 'react'

const Search = ({searchValue,handleSearch}) => {
  return (
    <div>
       <div className="search-container">
        <input
          value={searchValue}
          onChange={handleSearch}
          className="inp"
          type="text"
          placeholder="Rechercher..."
        />
      </div>
    </div>
  )
}

export default Search
