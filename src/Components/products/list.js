import React, { Component } from "react";
import ProductCard from "./card";


const ProductList = ({products}) => {
  console.log(products)
    return (
      <div className="row">
        {products && products.map((product) => {  
return (
  <div className="col-md-3 col-12"><ProductCard key={product.id} product={product} /></div>
)
          })}
      </div>
    )
  }

  export default ProductList
